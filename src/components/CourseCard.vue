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

<style scoped>
.paper {
  background-image: url('/binding-light.png') !important;
  background: var(--danger);
  font-family: 'Nunito', sans-serif;
  text-shadow: 1px 1px 1px #000;
  position: relative;
  float: left;
  margin: 10px 10px auto;
  border-radius: 2px;
  width: 30%;
  min-height: 25vh;
  min-width: 20vw;
}

.paper::before,
.paper::after {
  content: '';
  position: absolute;
  bottom: 10px;
  width: 40%;
  height: 10px;
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.7);
  z-index: -1;
  transition: all 0.3s ease-in-out;
}

.paper::before {
  left: 15px;
  transform: skew(-5deg) rotate(-5deg);
}

.paper::after {
  right: 15px;
  transform: skew(5deg) rotate(5deg);
}

.paper:hover::before,
.paper:hover::after {
  box-shadow: 0 2px 14px rgba(0, 0, 0, 0.4);
}

.paper:hover::before {
  left: 5px;
}

.paper:hover::after {
  right: 5px;
}
</style>
