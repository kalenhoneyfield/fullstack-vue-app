<template>
  <div>
    <b-link :to="`/course/${course.id}`">
      <b-card
        :title="course.title"
        :sub-title="`${course.User.firstName} ${course.User.lastName}`"
        style="max-width: 15rem;"
        class="my-4 paper"
      >
        <b-card-text></b-card-text>
      </b-card>
    </b-link>
  </div>
</template>

<script>
export default {
  props: {
    course: Object,
  },
  data() {
    return {};
  },
};
</script>

<style scope></style>
