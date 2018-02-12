<template>
  <a class="string" :href="value" target="_blank">'{{value}}'</a>
</template>

<script lang="ts">
  import { formatCode } from '../util';

  export default {
    props: [
      'value',
    ],
  };
</script>
