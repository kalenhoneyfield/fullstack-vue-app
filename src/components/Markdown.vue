<template>
  <div v-html="marked"></div>
</template>

<script>
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

export default {
  props: {
    markdown: String,
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
