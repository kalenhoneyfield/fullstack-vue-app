<template>
  <b-container mx-auto pl-2>
    <div class="mt-4"></div>
    <b-card-group deck>
      <CourseCard v-for="(course, index) in courses" :key="index" :course="course" />
    </b-card-group>
  </b-container>
</template>

<script>
import { mapActions } from 'vuex';

import CourseCard from '@/components/CourseCard.vue';

export default {
  name: 'Home',
  components: {
    CourseCard,
  },
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

<style scoped>
.b-container {
  background-color: red !important;
}
</style>
