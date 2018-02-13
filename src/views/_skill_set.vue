<template>
  <div class="skillset" @click.stop="toggle" :class="{ collapsed: collapsed }">
    <Comment :comment="title"><Collapsed v-if="collapsed"/></Comment>
    <template v-if="!collapsed">
      <template v-if="Array.isArray(skillset.data)">
        <SkillSet
          v-for="subset in skillset.data"
          :title="title + ' / ' + subset.title"
          :skillset="subset"
          :key="subset.title"
        />
      </template>
      <template v-else v-for="(skill, name) in skillset.data">
        <Skill
          :name="name"
          :skill="skill"
          :key="name"
        />
      </template>
      <CodeLine/>
    </template>
  </div>
</template>

<script lang="ts">
  import { track } from '../util';

  import CodeLine from './_code_line.vue';
  import Skill from './_skill.vue';
  import Comment from './_comment.vue';
  import Collapsed from './_collapsed.vue';

  export default {
    name: 'SkillSet',
    data() {
      return {
        collapsed: true,
      };
    },
    props: [
      'title',
      'skillset',
    ],
    methods: {
      toggle() {
        this.collapsed = !this.collapsed;
        track((this.collapsed ? 'Close' : 'Open') + 'SkillSet', this.title);
      },
    },
    components: {
      CodeLine,
      Skill,
      Comment,
      Collapsed,
    },
  };
</script>
