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
  import Variable from './_variable.vue';
  import String from './_string.vue';
  import Number from './_number.vue';

  export default {
    props: [
      'name',
      'skill',
    ],
    components: {
      Variable,
      String,
      Number,
    },
  };
</script>
