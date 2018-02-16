<template>
  <CodeLine>
    <span class="storage-type" v-if="isJs">const</span>
    <span class="white-space space" v-if="isJs"></span>
    <span class="variable">{{name}}</span>
    <template v-if="padLeft">
      <span v-for="i in padLeft" :key="i" class="white-space space"></span>
    </template>
    <template v-if="type && isTs">
      <span class="keyword">:</span>
      <span class="white-space space"></span>
      <span class="type class">{{type}}</span>
    </template>
    <span class="white-space space"></span>
    <span class="keyword">=</span>
    <span class="white-space space"></span>
    <slot>
      <span class="constant">
        {{currentLanguageHelper.undefined}}
      </span>
    </slot>
    <span class="expression" v-if="isJs">;</span>
  </CodeLine>
</template>

<script lang="ts">
  import { state } from '../data';
  import { Language } from '../data_types';

  import CodeLine from './_code_line.vue';

  export default {
    data() {
      return state;
    },
    props: [
      'name',
      'length',
      'type',
    ],
    computed: {
      padLeft() {
        if (this.length !== undefined && this.name.length < this.length) {
          return this.length - this.name.length;
        }
        return false;
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
      CodeLine,
    },
  };
</script>
