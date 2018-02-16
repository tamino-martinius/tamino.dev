<template>
  <Stage
    class="show-case"
    :abbreviation="`${data.name}`"
    :data="data"
    :isLast="isLast"
  >
    <CodeLine>
      <Tab/><Tab/>
      <VariableName name="name"/>
      <span class="expression">:</span>
      <span class="white-space space"></span>
      <String :value="data.name"></String>
      <span class="expression">,</span>
    </CodeLine>
    <CodeLine>
      <Tab/><Tab/>
      <VariableName name="urls"/>
      <span class="expression">:</span>
      <span class="white-space space"></span>
      <span class="expression">[</span>
    </CodeLine>
    <CodeLine v-for="url in data.urls" :key="url">
      <Tab/><Tab/><Tab/>
      <Url :value="url"></Url>
      <span class="expression">,</span>
    </CodeLine>
    <CodeLine>
      <Tab/><Tab/>
      <span class="expression">],</span>
    </CodeLine>
    <!-- <CodeLine>
      <Tab/><Tab/>
      <VariableName name="media"/>
      <span class="expression">:</span>
      <span class="white-space space"></span>
      <span class="expression">[</span>
    </CodeLine>
    <CodeLine v-for="entry in data.media" :key="entry">
      <Tab/><Tab/><Tab/>
      <String :value="entry"></String>
      <span class="expression">,</span>
    </CodeLine>
    <CodeLine>
      <Tab/><Tab/>
      <span class="expression">],</span>
    </CodeLine> -->
  </Stage>
</template>

<script lang="ts">
  import CodeLine from './_code_line.vue';
  import Tab from './_tab.vue';
  import String from './_string.vue';
  import Url from './_url.vue';
  import Stage from './_stage.vue';
  import VariableName from './_variable_name.vue';

  export default {
    props: [
      'data',
      'isLast',
    ],
    components: {
      CodeLine,
      Tab,
      String,
      Url,
      Stage,
      VariableName,
    },
  };
</script>
