<template>
  <div class="data">
    <CodeLine>
      <Tab/>
      <span class="expression">{</span>
    </CodeLine>
    <slot/>
    <CodeLine>
      <Tab/><Tab/>
      <span class="variable">startsAt</span>
      <span class="expression">:</span>
      <span class="white-space space"></span>
      <Date :value="data.startsAt"></Date>
      <span class="expression">,</span>
    </CodeLine>
    <CodeLine>
      <Tab/><Tab/>
      <span class="variable">endsAt</span>
      <span class="expression">:</span>
      <span class="white-space space"></span>
      <Date :value="data.endsAt"></Date>
      <span class="expression">,</span>
    </CodeLine>
    <CodeLine>
      <Tab/><Tab/>
      <span class="variable">skills</span>
      <span class="expression">:</span>
      <span class="white-space space"></span>
      <span class="expression">[</span>
    </CodeLine>
    <CodeLine v-for="(skill, key) in data.skills" :key="key">
      <Tab/><Tab/><Tab/>
      <span class="variable">{{key}}</span>
      <span class="expression">,</span>
    </CodeLine>
    <CodeLine>
      <Tab/><Tab/>
      <span class="expression">],</span>
    </CodeLine>
    <CodeLine>
      <Tab/><span class="expression">},</span>
    </CodeLine>
  </div>
</template>

<script lang="ts">
  import CodeLine from './_code_line.vue';
  import Tab from './_tab.vue';
  import String from './_string.vue';
  import Date from './_date.vue';

  export default {
    props: [
      'data',
    ],
    components: {
      CodeLine,
      Tab,
      String,
      Date,
    },
  };
</script>
