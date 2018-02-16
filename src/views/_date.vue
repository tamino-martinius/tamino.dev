<template>
  <div class="date">
    <template v-if="value">
      <span class="keyword" v-if="isJs">new</span>
      <span class="white-space space" v-if="isJs"></span>
      <span class="class">Date</span>
      <span class="expression" v-if="isRuby">.</span>
      <span class="variable" v-if="isRuby">parse</span>
      <span class="expression">(</span>
      <String :value="date"></String>
      <span class="expression">)</span>
    </template>
    <span v-else class="constant">
      {{currentLanguageHelper.undefined}}
    </span>
  </div>
</template>

<script lang="ts">
  import { state } from '../data';
  import { Language } from '../data_types';

  import String from './_string.vue';

  export default {
    data() {
      return state;
    },
    props: [
      'value',
    ],
    computed: {
      date() {
        if (this.value.getDate() === 1 && this.value.getMonth() === 0 && this.isJs) {
          return this.value.getFullYear();
        } else {
          return this.value.toISOString().substr(0,10);
        }
      },
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
      String,
    },
  };
</script>
