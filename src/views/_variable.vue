<template>
  <CodeLine>
    <span class="storage-type" v-if="isJs">const</span>
    <span class="white-space space" v-if="isJs"></span>
    <VariableName :name="name" :length="length"/>
    <span class="variable">{{displayName}}</span>
    <template v-if="padLeft">
      <span v-for="i in padLeft" :key="i" class="white-space space"></span>
    </template>
    <template v-if="type && isTs">
      <span class="keyword">:</span>
      <span class="white-space space"></span>
      <span class="type class">{{type}}</span>
    </template>
    <span class="white-space space"></span>
    <span class="keyword">=</span>
    <span class="white-space space"></span>
    <slot>
      <span class="constant">
        {{state.currentLanguageHelper.undefined}}
      </span>
    </slot>
    <span class="expression" v-if="isJs">;</span>
  </CodeLine>
</template>

<script lang="ts">
  import CodeLine from './_code_line.vue';
  import VariableName from './_variable_name.vue';

  export default {
    props: [
      'name',
      'length',
      'type',
    ],
    components: {
      CodeLine,
      VariableName,
    },
  };
</script>
