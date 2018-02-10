<template>
  <Stage class="education" :data="data">
    <CodeLine>
      <Tab/><Tab/>
      <span class="variable">university</span>
      <span class="expression">:</span>
      <span class="white-space space"></span>
      <String :value="data.university"></String>
      <span class="expression">,</span>
    </CodeLine>
    <CodeLine>
      <Tab/><Tab/>
      <span class="variable">graduiation</span>
      <span class="expression">:</span>
      <span class="white-space space"></span>
      <String :value="data.graduiation"></String>
      <span class="expression">,</span>
    </CodeLine>
  </Stage>
</template>

<script lang="ts">
  import CodeLine from './_code_line.vue';
  import Tab from './_tab.vue';
  import String from './_string.vue';
  import Stage from './_stage.vue';

  export default {
    props: [
      'data',
    ],
    components: {
      CodeLine,
      Tab,
      String,
      Stage,
    },
  };
</script>
