<template>
  <div class="section" :data-value="title">
    <CodeLine>
      <span class="comment">{{currentLanguageHelper.commentEnd}}</span>
      <template v-for="section in sections">
        <span
          class="comment"
          :class="{
            collapsible: title !== section,
            active: title === section,
          }"
          :key="`comment-${section}`"
        >{{stars(section)}}</span>
      </template>
      <span class="comment">
        {{currentLanguageHelper.commentChar}}{{currentLanguageHelper.commentChar}}
      </span>
    </CodeLine>
    <CodeLine>
      <span class="comment">{{currentLanguageHelper.commentChar}}</span>
      <template v-for="section in sections">
        <span
          class="white-space space"
          :class="{
            collapsible: title !== section,
          }"
          :key="`space-${section}`"
        />
        <span
          class="comment selectable"
          :class="{
            collapsible: title !== section,
            active: title === section,
          }"
          :key="`comment-${section}`"
          @click="scrollToSection(section)"
        >{{section}}</span>
      </template>
      <span class="white-space space" :key="`space-${section}`"></span>
      <span class="comment">{{currentLanguageHelper.commentChar}}</span>
    </CodeLine>
    <CodeLine>
      <span class="comment">{{currentLanguageHelper.commentChar}}</span>
      <template v-for="section in sections">
        <span
          class="comment"
          :class="{
            collapsible: title !== section,
            active: title === section,
          }"
          :key="`comment-${section}`"
        >{{stars(section)}}</span>
      </template>
      <span class="comment">
        {{currentLanguageHelper.commentChar}}{{currentLanguageHelper.commentEnd}}
      </span>
    </CodeLine>
  </div>
</template>

<script lang="ts">
  import {
    Section,
    Language,
  } from '../data_types';
  import { animate, Easing, track } from '../util';
  import { state } from '../data';

  import CodeLine from './_code_line.vue';

  export default {
    data() {
      return state;
    },
    props: [
      'section',
    ],
    methods: {
      stars(str: string) {
        return new Array(str.length + 2)
          .join(this.currentLanguageHelper.commentChar);
      },
      scrollToSection(name: string) {
        if (name !== this.title) {
          track('navigateTo', name);
          const target = document.querySelector(`.section[data-value=${name}]`);
          animate({
            target: document.querySelector('html'),
            key: 'scrollTop',
            value: (<HTMLElement>target).offsetTop,
            duration: 300,
            ease: Easing.EaseInOut,
          });
        }
      },
    },
    computed: {
      sections() {
        const keys = Object.keys(Section);
        return keys.slice(keys.length / 2);
      },
      title() {
        return Section[this.section];
      },
    },
    components: {
      CodeLine,
    },
  };
</script>
