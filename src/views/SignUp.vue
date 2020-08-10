<template>
  <b-container fluid>
    <div class="mt-4"></div>
    <b-row>
      <b-col sm="4" class="mx-auto" :class="{ failed: error }">
        <div>
          <h2>Sign In</h2>
        </div>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="mb-4">
          <b-form-group id="input-group-firstName" label="First Name:" label-for="input-firstName">
            <b-input-group>
              <b-form-input
                id="input-firstName"
                v-model="form.firstName"
                type="text"
                required
                placeholder="Enter first name"
              ></b-form-input>
            </b-input-group>
          </b-form-group>

          <b-form-group id="input-group-lastName" label="Last Name:" label-for="input-lastName">
            <b-input-group>
              <b-form-input
                id="input-lastName"
                v-model="form.lastName"
                type="text"
                required
                placeholder="Enter last name"
              ></b-form-input>
            </b-input-group>
          </b-form-group>

          <b-form-group
            id="input-group-emailAddress"
            label="Email address:"
            label-for="input-emailAddress"
          >
            <b-input-group>
              <b-form-input
                id="input-emailAddress"
                v-model="form.emailAddress"
                type="email"
                required
                placeholder="Enter email"
              ></b-form-input>
            </b-input-group>
          </b-form-group>

          <b-form-group id="input-group-password" label="Password:" label-for="input-password">
            <b-input-group>
              <b-form-input
                id="input-password"
                v-model="form.password"
                required
                type="password"
                placeholder="Enter password"
              ></b-form-input>
              <b-input-group-append>
                <b-input-group-text v-if="passwordsMatch">
                  <strong class="text-danger">!</strong>
                </b-input-group-text>
              </b-input-group-append>
              <b-form-input
                id="input-verify-password"
                v-model="vPassword"
                required
                type="password"
                placeholder="Verify password"
              ></b-form-input>
              <b-input-group-append>
                <b-input-group-text v-if="passwordsMatch">
                  <strong class="text-danger">!</strong>
                </b-input-group-text>
              </b-input-group-append>
            </b-input-group>
          </b-form-group>

          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
        <div v-if="error">Sign Up failed</div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      form: {
        emailAddress: '',
        password: '',
        firstName: '',
        lastName: '',
      },
      vPassword: '',
      show: true,
      error: null,
    };
  },
  methods: {
    ...mapActions(['signIn', 'signUp']),
    onSubmit(evt) {
      evt.preventDefault();
      if (this.vPassword !== this.form.password) {
        this.error = "Passwords Don't match";
      } else {
        this.signUp(this.form).then(data => {
          if (data.error) {
            this.error = data.error;
          }
        });

        this.resetForm();
      }
    },
    onReset(evt) {
      evt.preventDefault();
      this.resetForm();
    },
    resetForm() {
      // Reset our form values
      Object.keys(this.form).forEach(key => {
        this.form[key] = '';
      });
      this.vPassword = '';
      this.error = '';
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    toggle() {
      this.trueFalse();
    },
  },
  computed: {
    passwordsMatch() {
      return this.vPassword !== this.form.password;
    },
  },
};
</script>

<style scoped>
.failed {
  color: var(--danger);
  border: 2px solid var(--danger);
  box-shadow: 2px 2px 2px var(--danger);
  border-radius: 2rem;
}
</style>
