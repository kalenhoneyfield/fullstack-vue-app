<template>
  <div v-html="marked"></div>
</template>

<script>
// Simple component expects a string with markdown and returns html
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
});

export default {
  props: {
    markdown: String,
    className: String,
  },
  computed: {
    marked() {
      if (!this.markdown) {
        return '';
      }
      return md.render(this.markdown);
    },
  },
};
</script>

<style scoped></style>
