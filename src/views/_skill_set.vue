<template>
  <div class="skillset">
    <Comment :comment="title"></Comment>
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
  </div>
</template>

<script lang="ts">
  import CodeLine from './_code_line.vue';
  import Skill from './_skill.vue';
  import Comment from './_comment.vue';

  export default {
    name: 'SkillSet',
    props: [
      'title',
      'skillset',
    ],
    components: {
      CodeLine,
      Skill,
      Comment,
    },
  };
</script>
