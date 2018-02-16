<template>
  <CodeLine>
    <Tab v-for="i in indentation" :key="i"/>
    <span class="comment" v-html="commentBody"></span>
    <slot/>
  </CodeLine>
</template>

<script lang="ts">
  import { formatCode } from '../util';

  import CodeLine from './_code_line.vue';
  import Tab from './_tab.vue';

  export default {
    props: [
      'indentation',
      'comment',
    ],
    components: {
      CodeLine,
      Tab,
    },
    computed: {
      commentBody() {
        return formatCode(`${this.state.currentLanguageHelper.comment} ${this.comment}`);
      },
    },
  };
</script>
