<template>
  <a class="string" :href="value" target="_blank">'{{display}}'</a>
</template>

<script lang="ts">
  import { formatCode } from '../util';

  export default {
    props: [
      'value',
    ],
    computed: {
      display() {
        if (this.value.length > 70) {
          return this.value.replace('http://', '').replace('https://', '');
        }
        return this.value;
      },
    },
  };
</script>
