<template>
  <div class="curriculum-vitae">
    <CodeLine>
      <span class="storage-type" v-if="isJs">const</span>
      <span class="white-space space" v-if="isJs"></span>
      <span class="variable">{{title}}</span>
      <span class="keyword" v-if="isTs">:</span>
      <span class="white-space space"></span>
      <span class="expression" v-if="isTs">(</span>
      <span class="type class" v-if="isTs">Job</span>
      <span class="white-space space" v-if="isTs"></span>
      <span class="keyword" v-if="isTs">|</span>
      <span class="white-space space" v-if="isTs"></span>
      <span class="type class" v-if="isTs">Education</span>
      <span class="expression" v-if="isTs">)[]</span>
      <span class="white-space space" v-if="isTs"></span>
      <span class="expression">=</span>
      <span class="white-space space"></span>
      <span class="expression">[</span>
    </CodeLine>
    <template v-for="(entry, index) in data">
      <component
        :is="entry.company ? 'Job' : 'Education'"
        :key="`entry-${index}`"
        :data="entry"
        :isLast="index === data.length - 1"
      />
    </template>
    <CodeLine>
      <span class="expression">]</span>
      <span class="expression" v-if="isJs">;</span>
    </CodeLine>
  </div>
</template>

<script lang="ts">
  import { state } from '../data';
  import { Language } from '../data_types';

  import CodeLine from './_code_line.vue';
  import Job from './_job.vue';
  import Education from './_education.vue';

  export default {
    data() {
      return state;
    },
    props: [
      'data',
    ],
    computed: {
      title() {
        return this.isJs ? 'curriculumVitae' : 'curriculum_vitae';
      },
      isJs() {
        return this.currentLanguage === Language.javascript
          || this.currentLanguage === Language.typescript;
        ;
      },
      isTs() {
        return this.currentLanguage === Language.typescript;
      },
    },
    components: {
      CodeLine,
      Job,
      Education,
    },
  };
</script>
