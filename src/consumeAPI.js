import axios from 'axios';
import Cookies from 'js-cookie';

const apiBaseUrl = 'http://localhost:5000/api';

/**
 * I'm not entirely thrilled with the authentication system, and would like to rewrite this using JWT
 * But at this time, I don't really feel like I have the time to do that, so I'll turn this in and
 * re-write portions of this app later to better meet my own personal requirements.
 */
class GetData {
  constructor() {
    this.fullResponse = null;
    this.responseData = null;
    this.statusCode = null;
    this.errorMessage = null;
  }

  api(
    path,
    method = 'GET',
    body = null,
    requiresAuth = false,
    credentials = Cookies.getJSON('seaQritWerhd') || null, // doing it this way feels slightly less meh
    userNamePassword
  ) {
    let credentialInfo = credentials;
    const url = apiBaseUrl + path;

    const options = {
      method,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    };

    if (body !== null) {
      options.data = JSON.stringify(body);
    }

    // Check if auth is required
    // if it is, check if we have been passed credentials, if we haven't grab the email/password combo
    // this is really only needed for first sign in, after that the token is stored user side
    if (requiresAuth) {
      if (credentialInfo === null) {
        credentialInfo = btoa(`${userNamePassword.emailAddress}:${userNamePassword.password}`);
      }
      options.headers.Authorization = `Basic ${credentialInfo}`;
    }

    return axios(url, options)
      .then(response => {
        this.fullResponse = response;
        this.responseData = response.data;
        this.statusCode = response.status;
      })
      .catch(error => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          this.fullResponse = error.response;
          this.statusCode = error.response.status;
          this.errorMessage = error.message;
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          this.errorMessage = error.message;
        } else {
          // Something happened in setting up the request that triggered an Error
          this.errorMessage = error.message;
        }
        console.log(error.config);
      });
  }
}

export default GetData;
