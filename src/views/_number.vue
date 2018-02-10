<template>
  <span class="number" :style="{ '--value': value }">{{value}}</span>
</template>

<script lang="ts">
  export default {
    props: [
      'value',
    ],
  };
</script>
