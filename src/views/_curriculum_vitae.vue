<template>
  <div class="curriculum-vitae">
    <CodeLine>
      <span class="storage-type">const</span>
      <span class="white-space space"></span>
      <span class="variable">curriculumVitae</span>
      <span class="keyword">:</span>
      <span class="white-space space"></span>
      <span class="expression">(</span>
      <span class="type class">Job</span>
      <span class="white-space space"></span>
      <span class="keyword">|</span>
      <span class="white-space space"></span>
      <span class="type class">Education</span>
      <span class="expression">)[]</span>
      <span class="white-space space"></span>
      <span class="expression">=</span>
      <span class="white-space space"></span>
      <span class="expression">[</span>
    </CodeLine>
    <template v-for="(entry, index) in data">
      <CodeLine v-if="index !== 0" :key="index"/>
      <component
        :is="entry.company ? 'Job' : 'Education'"
        :key="index"
        :data="entry"
      />
    </template>
    <CodeLine>
      <span class="expression">];</span>
    </CodeLine>
  </div>
</template>

<script lang="ts">
  import CodeLine from './_code_line.vue';
  import Job from './_job.vue';
  import Education from './_education.vue';

  export default {
    props: [
      'data',
    ],
    components: {
      CodeLine,
      Job,
      Education,
    },
  };
</script>
