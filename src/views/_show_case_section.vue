<template>
  <div>
    <Section :section="section"></Section>
    <CodeLine/>
    <CodeLine>
      <span class="storage-type" v-if="isJs">const</span>
      <span class="white-space space" v-if="isJs"></span>
      <span class="variable">{{name}}</span>
      <span class="keyword" v-if="isTs">:</span>
      <span class="white-space space" v-if="isTs"></span>
      <span class="type class" v-if="isTs">ShowCase</span>
      <span class="expression" v-if="isTs">[]</span>
      <span class="white-space space"></span>
      <span class="expression">=</span>
      <span class="white-space space"></span>
      <span class="expression">[</span>
    </CodeLine>
    <template v-for="(entry, index) in data">
      <ShowCase
        :key="`show-case-${index}`"
        :data="entry"
        :isLast="index === data.length - 1"
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
  import { state } from '../data';
  import { Language } from '../data_types';

import CodeLine from './_code_line.vue';
  import Section from './_section.vue';
  import ShowCase from './_show_case.vue';

  export default {
    data() {
      return state;
    },
    props: [
      'section',
      'name',
      'data',
    ],
    computed: {
      isJs() {
        return this.currentLanguage === Language.javascript
          || this.currentLanguage === Language.typescript;
        ;
      },
      isTs() {
        return this.currentLanguage === Language.typescript;
        ;
      },
      isRuby() {
        return this.currentLanguage === Language.ruby;
      },
    },
    components: {
      CodeLine,
      Section,
      ShowCase,
    },
  };
</script>
