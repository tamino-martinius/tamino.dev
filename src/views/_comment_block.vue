<template>
  <div class="comment-block">
    <CodeLine>
      <span class="comment">{{header}}</span>
    </CodeLine>
    <CodeLine v-for="(comment, index) in comments" :key="index">
      <span class="comment" v-html="comment"></span>
    </CodeLine>
    <CodeLine>
      <span class="comment">{{footer}}</span>
    </CodeLine>
  </div>
</template>

<script lang="ts">
  import { formatCode, center } from '../util';

  import CodeLine from './_code_line.vue';

  export default {
    props: [
      'comment',
    ],
    computed: {
      comments() {
        const len = this.longestLine;

        return this.lines
          .map((str: string) => center(str, len))
          .map(formatCode)
          .map((str: string) =>
            this.state.currentLanguageHelper.commentChar +
            ' ' + str + ' ' +
            this.state.currentLanguageHelper.commentChar
          )
        ;
      },
      lines() {
        return this.comment.split('\n');
      },
      longestLine() {
        return Math.max(...this.lines.map((str: string) => str.length));
      },
      header() {
        return this.state.currentLanguageHelper.commentEnd +
          new Array(this.longestLine + 4)
            .join(this.state.currentLanguageHelper.commentChar);
      },
      footer() {
        return new Array(this.longestLine + 4)
          .join(this.state.currentLanguageHelper.commentChar) +
            this.state.currentLanguageHelper.commentEnd;
      },
    },
    components: {
      CodeLine,
    },
  };
</script>
