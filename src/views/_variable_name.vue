<template>
  <span class="variable">
    {{displayName}}<template v-if="padLeft">
      <span v-for="i in padLeft" :key="i" class="white-space space"></span>
    </template>
  </span>
</template>

<script lang="ts">
  export default {
    props: [
      'name',
      'length',
    ],
    computed: {
      displayName() {
        return this.snakeCase(this.name);
      },
      padLeft() {
        if (this.length !== undefined && this.displayName.length < this.length) {
          return this.length - this.displayName.length;
        }
        return false;
      },
    },
  };
</script>
