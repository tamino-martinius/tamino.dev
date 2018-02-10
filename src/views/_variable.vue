<template>
  <CodeLine>
    <span class="storage-type">const</span>
    <span class="white-space space"></span>
    <span class="variable">{{name}}</span>
    <template v-if="padLeft">
      <span v-for="i in padLeft" :key="i" class="white-space space"></span>
    </template>
    <template v-if="type">
      <span class="keyword">:</span>
      <span class="white-space space"></span>
      <span class="type class">{{type}}</span>
    </template>
    <span class="white-space space"></span>
    <span class="keyword">=</span>
    <span class="white-space space"></span>
    <slot>
      <span class="constant">undefined</span>
    </slot>
    <span class="expression">;</span>
  </CodeLine>
</template>

<script lang="ts">
  import CodeLine from './_code_line.vue';

  export default {
    props: [
      'name',
      'length',
      'type',
    ],
    components: {
      CodeLine,
    },
    computed: {
      padLeft() {
        if (this.length !== undefined && this.name.length < this.length) {
          return this.length - this.name.length;
        }
        return false;
      },
    },
  };
</script>
