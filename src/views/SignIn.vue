<template>
  <b-container fluid>
    <div class="mt-4"></div>
    <b-row>
      <b-col sm="4" class="mx-auto" :class="{ failed: error }">
        <div>
          <h2>Sign In</h2>
        </div>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="mb-4">
          <b-form-group id="input-group-1" label="Email address:" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.emailAddress"
              type="email"
              required
              placeholder="Enter email"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Password:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.password"
              required
              type="password"
              placeholder="Enter password"
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
          <b-button variant="info" @click="toggle">toggle</b-button>
        </b-form>
        <div v-if="error">Log in failed</div>
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
      },
      show: true,
      error: null,
    };
  },
  methods: {
    ...mapActions(['signIn', 'trueFalse']),
    onSubmit(evt) {
      evt.preventDefault();
      this.signIn(this.form).then(data => {
        if (data.error) {
          this.error = data.error;
        }
      });

      this.resetForm();
    },
    onReset(evt) {
      evt.preventDefault();
      this.resetForm();
    },
    resetForm() {
      // Reset our form values
      this.form.emailAddress = '';
      this.form.password = '';
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
