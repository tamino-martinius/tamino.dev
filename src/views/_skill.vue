<template>
  <Variable :name="name" type="Skill" :length="16">
    <span class="expression">{</span>
    <span class="white-space space"></span>
    <span class="variable">level</span>
    <span class="expression">:</span>
    <span class="white-space space"></span>
    <Number :value="skill.level.toFixed(1)" class="progress" />
    <span class="expression">,</span>
    <span class="white-space space"></span>
    <span class="variable">name</span>
    <span class="expression">:</span>
    <span class="white-space space"></span>
    <String :value="skill.name"></String>
    <span class="white-space space"></span>
    <span class="expression">}</span>
    <span class="variable" v-if="isRuby">.with_indifferent_access</span>
  </Variable>
</template>

<script lang="ts">
  import { state } from '../data';
  import { Language } from '../data_types';

  import Variable from './_variable.vue';
  import String from './_string.vue';
  import Number from './_number.vue';

  export default {
    data() {
      return state;
    },
    props: [
      'name',
      'skill',
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
      Variable,
      String,
      Number,
    },
  };
</script>
