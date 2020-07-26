<template>
  <div>
    <b-card
      :title="course.title"
      :sub-title="`${course.User.firstName} ${course.User.lastName}`"
      style="max-width: 15rem;"
    >
      <b-card-text> </b-card-text>
    </b-card>
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

<style scoped>
.color {
  background: var(--blue);
}
</style>
