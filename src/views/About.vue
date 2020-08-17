<template>
  <div>
    <b-jumbotron>
      <template v-slot:header>Vue Course Library</template>

      <template v-slot:lead>
        <h1>Full Stack Vue App</h1>
      </template>

      <hr class="my-4" />

      <p>
        A web and desktop app for managing a course database.
      </p>

      <b-progress :max="max" height="2rem" class="w-25">
        <b-progress-bar :value="progress" animated variant="green">
          <strong>Redirecting back to home</strong>
        </b-progress-bar>
      </b-progress>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      value: 0,
      max: 60,
    };
  },
  mounted() {
    setInterval(() => {
      const val = Math.random() * 3;
      this.value += val;
    }, 1000);
  },
  methods: {
    zeroValue() {
      this.$router.push('/').catch(() => {});
    },
  },
  computed: {
    progress() {
      if (this.value > 60) {
        this.zeroValue();
      }
      return this.value;
    },
  },
};
</script>
