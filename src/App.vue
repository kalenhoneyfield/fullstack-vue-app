<template>
  <div id="app">
    <NavBar />
    <transition name="view">
      <router-view />
    </transition>
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

.view-enter-active,
.view-leave-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease;
}

.view-enter-active {
  transition-delay: 0.5s;
}

.view-enter,
.view-leave-to {
  opacity: 0;
  transform: translateX(10px);
  transform: rotateY(90deg);
}

.view-enter-to,
.view-leave {
  opacity: 1;
  transform: translateX(0px);
  transform: rotateY(0deg);
}
</style>
