<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand to="/">Courses</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/about" :active="$route.name == 'About'">About</b-nav-item>
        </b-navbar-nav>

        <!-- <b-button variant="danger" @click="getCourses">Test API</b-button> -->

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>{{ $store.state.user.fullName ? $store.state.user.fullName : 'User' }}</em>
            </template>

            <div v-if="!$store.state.user.token">
              <b-dropdown-item to="/signUp">Sign Up</b-dropdown-item>
              <b-dropdown-item to="/signIn">Sign In</b-dropdown-item>
            </div>
            <div v-else>
              <b-dropdown-item to="/profile">Profile</b-dropdown-item>
              <b-dropdown-item href="#" @click="signOut">Sign Out</b-dropdown-item>
            </div>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['getCourseList', 'signOut']),
    getCourses() {
      this.getCourseList().then(data => console.log(data));
    },
  },
};
</script>
