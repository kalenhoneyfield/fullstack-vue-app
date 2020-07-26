<template>
  <div id="root" v-if="course">
    <div>
      <div class="header">
        <div class="bounds">
          <h1 class="header--logo">Courses</h1>
          <nav><span>Welcome Joe Smith!</span><a class="signout" href="index.html">Sign Out</a></nav>
        </div>
      </div>
      <hr />
      <div>
        <div class="actions--bar">
          <div class="bounds">
            <div class="grid-100">
              <span
                ><a class="button" href="update-course.html">Update Course</a
                ><a class="button" href="#">Delete Course</a></span
              ><a class="button button-secondary" href="index.html">Return to List</a>
            </div>
          </div>
        </div>
        <div class="bounds course--detail">
          <div class="grid-66">
            <div class="course--header">
              <h4 class="course--label">Course</h4>
              <h3 class="course--title">{{ course.title }}</h3>
              <p v-if="course">By {{ `${course.User.firstName} ${course.User.lastName}` }}</p>
            </div>
            <div class="course--description">
              <Markdown :markdown="course.description" />
            </div>
          </div>
          <div class="grid-25 grid-right">
            <div class="course--stats">
              <ul class="course--stats--list">
                <li class="course--stats--list--item">
                  <h4>Estimated Time</h4>
                  <h3>{{ course.estimatedTime }}</h3>
                </li>
                <li class="course--stats--list--item">
                  <h4>Materials Needed</h4>
                  <ul>
                    <Markdown :markdown="course.materialsNeeded" />
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import Markdown from '@/components/Markdown.vue';

export default {
  components: {
    Markdown,
  },
  data() {
    return {
      courseID: null,
      // course: { title: 'course', descriptions: 'words', User: { firstName: 'me', lastName: 'me' } },
      course: null,
    };
  },
  methods: {
    ...mapActions(['getCourseByID']),
  },
  mounted() {
    this.courseID = this.$route.params.id;
    this.getCourseByID(this.courseID).then(course => {
      this.course = course.data.course;
    });
  },
};
</script>
