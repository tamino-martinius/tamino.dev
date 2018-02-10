<template>
  <CodeLine>
    <span class="comment" v-html="commentBody"></span>
  </CodeLine>
</template>

<script lang="ts">
  import CodeLine from './_code_line.vue';

  export default {
    props: [
      'comment',
    ],
    components: {
      CodeLine,
    },
    computed: {
      commentBody() {
        return `// ${this.comment}`
          .replace(/ /g, '<span class="white-space space"></span>')
        ;
      },
    },
  };
</script>
