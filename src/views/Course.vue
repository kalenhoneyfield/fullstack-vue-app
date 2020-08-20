<template>
  <b-container v-if="course" fluid class="course--description">
    <hr />
    <b-form class="mb-4">
      <b-row>
        <b-col>
          <h4>Course</h4>

          <div v-if="editField !== 'title'" @click="showEditMode('title')">
            <h3>{{ course.title }}</h3>
          </div>
          <div v-else>
            <b-form-group id="input-group-title" label="Course Title:" label-for="input-title">
              <b-input-group>
                <b-form-input
                  id="input-title"
                  type="email"
                  required
                  v-model="course.title"
                  @blur="blurField"
                  ref="title"
                ></b-form-input>
                <b-input-group-append>
                  <b-button variant="danger" @click="putCourse">Save</b-button>
                </b-input-group-append>
              </b-input-group>
            </b-form-group>
          </div>

          <p>By: {{ `${course.User.firstName} ${course.User.lastName}` }}</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="8">
          <div v-if="editField !== 'description'" @click="showEditMode('description')">
            <Markdown :markdown="course.description" />
          </div>
          <div v-else>
            <b-form-group
              id="input-group-description"
              label="Course Description:"
              label-for="textarea-description"
            >
              <b-input-group>
                <b-form-textarea
                  id="textarea-description"
                  size="lg"
                  rows="3"
                  max-rows="32"
                  v-model="course.description"
                  @blur="blurField"
                  ref="description"
                ></b-form-textarea>
                <b-input-group-append>
                  <b-button variant="danger" @click="putCourse">Save</b-button>
                </b-input-group-append>
              </b-input-group>
            </b-form-group>
          </div>
        </b-col>
        <b-col sm="4" class="course--description">
          <ul>
            <li>
              <h4>Estimated Time</h4>
              <div v-if="editField !== 'estimatedTime'" @click="showEditMode('estimatedTime')">
                <h3>{{ course.estimatedTime }}</h3>
              </div>
              <div v-else>
                <b-form-group
                  id="input-group-estimatedTime"
                  label="Course Estimated Time:"
                  label-for="input-estimatedTime"
                >
                  <b-input-group>
                    <b-form-input
                      id="input-estimatedTime"
                      type="text"
                      required
                      v-model="course.estimatedTime"
                      @blur="blurField"
                      ref="estimatedTime"
                    ></b-form-input>
                    <b-input-group-append>
                      <b-button variant="danger" @click="putCourse">Save</b-button>
                    </b-input-group-append>
                  </b-input-group>
                </b-form-group>
              </div>
            </li>
            <li>
              <h4>Materials Needed</h4>
              <div v-if="editField !== 'materialsNeeded'" @click="showEditMode('materialsNeeded')">
                <Markdown :markdown="course.materialsNeeded" />
              </div>
              <div v-else>
                <b-form-group
                  id="input-group-materialsNeeded"
                  label="Course Materials Needed:"
                  label-for="textarea-materialsNeeded"
                >
                  <b-input-group>
                    <b-form-textarea
                      id="textarea-materialsNeeded"
                      size="lg"
                      rows="3"
                      max-rows="32"
                      v-model="course.materialsNeeded"
                      @blur="blurField"
                      ref="materialsNeeded"
                    ></b-form-textarea>
                    <b-input-group-append>
                      <b-button variant="danger" @click="putCourse">Save</b-button>
                    </b-input-group-append>
                  </b-input-group>
                </b-form-group>
              </div>
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
      editField: '',
    };
  },
  methods: {
    ...mapActions(['getCourseByID', 'putCourseByID']),
    showEditMode(name) {
      if (this.$store.state.user.emailAddress === this.course.User.emailAddress && !this.editMode) {
        this.editMode = true;
        this.editField = name;
        setTimeout(() => {
          this.$refs[name].$el.focus();
        }, 10);
      }
    },
    blurField() {
      this.editMode = false;
      this.editField = '';
    },
    putCourse() {
      const courseToUpdate = {
        course: this.course,
        user: this.$store.state.user,
      };
      this.blurField();
      this.putCourseByID(courseToUpdate);
    },
    loggIt(e) {
      console.log(e.target.id);
    },
  },
  mounted() {
    this.courseID = this.$route.params.id;
    if (this.courseID !== 'new') {
      this.getCourseByID(this.courseID).then(course => {
        this.course = course.data.course;
      });
    }
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
