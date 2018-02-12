<template>
  <span class="string" v-html="content"></span>
</template>

<script lang="ts">
  import { formatCode } from '../util';

  export default {
    props: [
      'value',
    ],
    computed: {
      content() {
        return formatCode(`'${this.value}'`);
      },
    },
  };
</script>
