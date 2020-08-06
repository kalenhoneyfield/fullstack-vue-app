<template>
  <div>
    <h1>Error</h1>
    <p>{{ apiHost }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      apiHost: process.env.VUE_APP_API_HOSTNAME,
    };
  },
};
</script>
