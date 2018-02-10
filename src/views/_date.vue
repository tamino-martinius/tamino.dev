<template>
  <div class="date">
    <template v-if="value">
      <span class="keyword">new</span>
      <span class="white-space space"></span>
      <span class="class">Date</span>
      <span class="expression">(</span>
      <String :value="date"></String>
      <span class="expression">)</span>
    </template>
    <span v-else class="constant">undefined</span>
  </div>
</template>

<script lang="ts">
  import String from './_string.vue';

  export default {
    props: [
      'value',
    ],
    computed: {
      date() {
        if (this.value.getDate() === 1 && this.value.getMonth() === 0) {
          return this.value.getFullYear();
        } else {
          return this.value.toISOString().substr(0,10);
        }
      },
    },
    components: {
      String,
    },
  };
</script>
