<template>
  <div class="multi-line-string">
    <CodeLine v-for="(line, index) in lines" :key="index">
      <Tab v-for="i in indentation" :key="i"/><span class="string" v-html="line"></span>
    </CodeLine>
  </div>
</template>

<script lang="ts">
  import { formatCode } from '../util';

  import CodeLine from './_code_line.vue';
  import Tab from './_tab.vue';

  export default {
    props: [
      'indentation',
      'value',
    ],
    computed: {
      lines() {
        return this.value.split('\n').map((str: string) => formatCode(str.trim()));
      },
    },
    components: {
      CodeLine,
      Tab,
    },
  };
</script>
