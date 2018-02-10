<template>
  <div class="comment-block">
    <CodeLine>
      <span class="comment">{{commentHeader}}</span>
    </CodeLine>
    <CodeLine>
      <span class="comment" v-html="commentBody"></span>
    </CodeLine>
    <CodeLine>
      <span class="comment">{{commentFooter}}</span>
    </CodeLine>
  </div>
</template>

<script lang="ts">
  import CodeLine from './_code_line.vue';

  export default {
    props: [
      'comment',
    ],
    computed: {
      commentBody() {
        return `* ${this.comment} *`
          .replace(/ /g, '<span class="white-space space"></span>')
        ;
      },
      commentHeader() {
        return '/' + new Array(this.comment.length + 4).join('*');
      },
      commentFooter() {
        return new Array(this.comment.length + 4).join('*') + '/';
      },
    },
    components: {
      CodeLine,
    },
  };
</script>
