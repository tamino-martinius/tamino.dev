<template>
  <CommentBlock :comment="title"></CommentBlock>
</template>

<script lang="ts">
  import {
    Section,
  } from '../data_types';

  import CommentBlock from './_comment_block.vue';

  export default {
    props: [
      'section',
    ],
    computed: {
      title() {
        return Section[this.section];
      },
    },
    components: {
      CommentBlock,
    },
  };
</script>
