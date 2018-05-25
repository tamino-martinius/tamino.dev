<template>
  <div class="cookie-info" @click.stop="hide" :class="{ hidden: hidden }">
    <CommentBlock
      comment="Please Note: This page uses cookies to count visitors"
    />
  </div>
</template>

<script lang="ts">
  import { track } from '../util';

  import Comment from './_comment.vue';
  import CommentBlock from './_comment_block.vue';
  import Collapsed from './_collapsed.vue';

  const cookieStr = document.cookie;
  let cookie = { cookieInfo: false };
  if (cookieStr) {
    cookieStr.split(';').forEach((cookieProperty) => {
      if (cookieProperty.indexOf('=') >= 0) {
        const [key, value] = cookieProperty.split('=');
        if (key.trim() === 'json') cookie = JSON.parse(value);
      }
    });
  }

  export default {
    data() {
      return {
        hidden: cookie.cookieInfo,
      };
    },
    methods: {
      hide() {
        cookie.cookieInfo = true;
        document.cookie = 'json=' + JSON.stringify(cookie);
        this.hidden = true;
      },
    },
    components: {
      CommentBlock,
    },
  };
</script>
