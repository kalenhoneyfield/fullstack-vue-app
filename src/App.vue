<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

// @ is an alias to /src
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'Home',
  components: {
    NavBar,
  },
  data() {
    return {
      token: window.localStorage.getItem('seaQritTolkien') || null,
    };
  },
  methods: {
    ...mapActions(['signIn']),
  },
  mounted() {
    if (this.token) {
      this.signIn({ token: this.token });
    }
  },
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.course--description p {
  font-size: 16px;
  line-height: 1.3;
  color: #444;
}
.course--description ul {
  list-style-type: none;
}

.course--description li {
  position: relative;
  padding-left: 30px;
  padding: 10px 0 3px 5%;
  border-top: 1px solid #ccc;
  font-size: 16px;
  line-height: 1.8;
  font-family: 'Nunito', sans-serif;
}

.course--description li:before,
.course--description li:after {
  content: ' ';
  display: table;
}
</style>
