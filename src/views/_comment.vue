<template>
  <CodeLine>
    <Tab v-for="i in indentation" :key="i"/>
    <span class="comment" v-html="commentBody"></span>
    <slot/>
  </CodeLine>
</template>

<script lang="ts">
  import { formatCode } from '../util';
  import { state } from '../data';
  import { Language } from '../data_types';

  import CodeLine from './_code_line.vue';
  import Tab from './_tab.vue';

  export default {
    data() {
      return state;
    },
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
        return formatCode(`${this.currentLanguageHelper.comment} ${this.comment}`);
      },
    },
  };
</script>
