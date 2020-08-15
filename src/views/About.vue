<template>
  <div class="about">
    <h1>This is an about page</h1>
    <hr />
    <b-progress :max="max" height="2rem" class="w-25">
      <b-progress-bar :value="progress" animated variant="warning">
        <strong>{{ value.toFixed(2) }} / {{ max }}</strong>
      </b-progress-bar>
    </b-progress>
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
