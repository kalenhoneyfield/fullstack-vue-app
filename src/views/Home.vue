<template>
  <h1>Home</h1>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Home',
  data() {
    return {
      courses: [],
    };
  },
  methods: {
    ...mapActions(['getCourseList']),
    getCourses() {
      this.getCourseList().then(data => {
        this.courses = data.data.courses;
      });
    },
  },
  mounted() {
    this.getCourses();
  },
};
</script>
