<template>
  <Stage class="job" :data="data">
    <CodeLine>
      <Tab/><Tab/>
      <span class="variable">name</span>
      <span class="expression">:</span>
      <span class="white-space space"></span>
      <String :value="data.name"></String>
      <span class="expression">,</span>
    </CodeLine>
    <CodeLine>
      <Tab/><Tab/>
      <span class="variable">description</span>
      <span class="expression">:</span>
      <span class="white-space space"></span>
      <String :value="data.description"></String>
      <span class="expression">,</span>
    </CodeLine>
    <CodeLine>
      <Tab/><Tab/>
      <span class="variable">urls</span>
      <span class="expression">:</span>
      <span class="white-space space"></span>
      <span class="expression">[</span>
    </CodeLine>
    <CodeLine v-for="url in data.urls" :key="url">
      <Tab/><Tab/><Tab/>
      <String :value="url"></String>
      <span class="expression">,</span>
    </CodeLine>
    <CodeLine>
      <Tab/><Tab/>
      <span class="expression">],</span>
    </CodeLine>
    <CodeLine>
      <Tab/><Tab/>
      <span class="variable">media</span>
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
