<template>
  <div>
    <Section :section="section"></Section>
    <CodeLine/>
    <CodeLine>
      <span class="storage-type">const</span>
      <span class="white-space space"></span>
      <span class="variable">{{name}}</span>
      <span class="keyword">:</span>
      <span class="white-space space"></span>
      <span class="type class">ShowCase</span>
      <span class="expression">[]</span>
      <span class="white-space space"></span>
      <span class="expression">=</span>
      <span class="white-space space"></span>
      <span class="expression">[</span>
    </CodeLine>
    <template v-for="(entry, index) in data">
      <CodeLine v-if="index !== 0" :key="index"/>
      <ShowCase
        :key="index"
        :data="entry"
      />
    </template>
    <CodeLine>
      <span class="expression">];</span>
    </CodeLine>
    <CodeLine/>
    <CodeLine/>
  </div>
</template>

<script lang="ts">
  import CodeLine from './_code_line.vue';
  import Section from './_section.vue';
  import ShowCase from './_show_case.vue';

  export default {
    props: [
      'section',
      'name',
      'data',
    ],
    components: {
      CodeLine,
      Section,
      ShowCase,
    },
  };
</script>
