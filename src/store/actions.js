import GetAPI from '../consumeAPI';
import router from '../router';

function handleAPIErrors(apiErrorMessage, statusCode) {
  /**
   * Handle the following error conditions
   * 403 as not authorized, these are technically different error states however the average user probably doesn't care enough for the nuanced differences
   * 404 as not found
   * 500 as server side error
   * we will ignore 400/401 errors here, as they are validation errors and we'll want to handle them differently
   * all other errors should be treated like 500 errors.
   * return true if we handled the error here, false if not
   */
  if (apiErrorMessage) {
    if (statusCode === 500) {
      router.push(`/error`).catch(() => {});
    } else if (statusCode === 403) {
      router.push(`/notAuthorized`).catch(() => {});
    } else if (statusCode === 404) {
      router.push(`/notFound`).catch(() => {});
    } else if (statusCode === 400 || statusCode === 401) {
      return false;
    } else {
      router.push(`/error`).catch(() => {});
    }
  }
  return true;
}

export default {
  trueFalse: context => {
    context.commit('trueFalse');
  },
  getCourseList: async () => {
    let response = {};
    const handleAPI = new GetAPI();
    await handleAPI.api('/courses').then(() => {
      if (handleAPIErrors(handleAPI.errorMessage, handleAPI.statusCode)) {
        if (handleAPI.responseData) {
          response = {
            data: handleAPI.responseData,
            status: handleAPI.statusCode,
          };
        }
      } else {
        response = {
          error: handleAPI.errorMessage,
          status: handleAPI.statusCode,
        };
      }
    });
    return response;
  },
  getCourseByID: async (context, courseId) => {
    let response = {};
    const handleAPI = new GetAPI();
    await handleAPI.api(`/courses/${courseId}`).then(() => {
      if (handleAPIErrors(handleAPI.errorMessage, handleAPI.statusCode)) {
        if (handleAPI.responseData) {
          response = {
            data: handleAPI.responseData,
            status: handleAPI.statusCode,
          };
        }
      } else {
        response = {
          error: handleAPI.errorMessage,
          status: handleAPI.statusCode,
        };
      }
    });
    return response;
  },
  signIn: async (context, userObject) => {
    const pwd = userObject.password;
    let userPayload = {};
    const handleAPI = new GetAPI();
    await handleAPI.api(`/users`, 'GET', null, true, null, userObject).then(() => {
      if (handleAPIErrors(handleAPI.errorMessage, handleAPI.statusCode)) {
        if (handleAPI.responseData) {
          userPayload = {
            user: handleAPI.responseData.user,
            fullName: `${handleAPI.responseData.user.firstName} ${handleAPI.responseData.user.lastName}`,
            password: pwd,
          };
          context.commit('logUserIn', userPayload);
        }
      } else {
        userPayload = {
          error: handleAPI.errorMessage,
        };
      }
    });
    return userPayload;
  },
};
