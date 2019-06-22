<template>
  <Stage
    class="education"
    :abbreviation="`${startYear}-${endYear} - ${data.university} - ${data.graduiation}`"
    :data="data"
    :isLast="isLast"
  >
    <CodeLine>
      <Tab/><Tab/>
      <VariableName name="university"/>
      <span class="expression">:</span>
      <span class="white-space space"></span>
      <String :value="data.university"></String>
      <span class="expression">,</span>
    </CodeLine>
    <CodeLine>
      <Tab/><Tab/>
      <VariableName name="graduiation"/>
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
  import VariableName from './_variable_name.vue';

  export default {
    props: [
      'data',
      'isLast',
    ],
    computed: {
      startYear() {
        return this.data.startsAt.getFullYear();
      },
      endYear() {
        return this.data.endsAt ? this.data.endsAt.getFullYear() : ' now';
      },
    },
    components: {
      CodeLine,
      Tab,
      String,
      Stage,
      VariableName,
    },
  };
</script>
