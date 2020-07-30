<template>
  <b-container v-if="course" fluid class="course--description">
    <hr />
    <b-form class="mb-4">
      <b-row>
        <b-col>
          <h4>Course</h4>

          <div v-if="!editMode">
            <h3>{{ course.title }}</h3>
          </div>
          <div v-else>
            <b-form-group id="input-group-1" label="Course Title:" label-for="input-title">
              <b-form-input
                id="input-title"
                type="email"
                required
                v-model="course.title"
              ></b-form-input>
            </b-form-group>
          </div>

          <p>By: {{ `${course.User.firstName} ${course.User.lastName}` }}</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="8">
          <div v-if="!editMode">
            <Markdown :markdown="course.description" class="course--description" />
          </div>
          <div v-else>
            <b-form-textarea
              id="textarea-large"
              size="lg"
              rows="3"
              max-rows="32"
              v-model="course.description"
            ></b-form-textarea>
          </div>
        </b-col>
        <b-col sm="4" class="course--description">
          <ul>
            <li>
              <h4>Estimated Time</h4>
              <h3>{{ course.estimatedTime }}</h3>
            </li>
            <li>
              <h4>Materials Needed</h4>
              <Markdown :markdown="course.materialsNeeded" />
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-form>
  </b-container>
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
      course: null,
      editMode: false,
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

<style lang="css" scoped>
/* .course--description p {
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
} */
</style>
