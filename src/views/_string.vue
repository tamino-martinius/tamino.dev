<template>
  <span class="string" v-html="content"></span>
</template>

<script lang="ts">
  export default {
    props: [
      'value',
    ],
    computed: {
      content() {
        return `'${this.value}'`
          .replace(/ /g, '<span class="white-space space"></span>')
        ;
      },
    },
  };
</script>
