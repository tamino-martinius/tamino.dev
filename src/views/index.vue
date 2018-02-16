<template>
  <div id="view" class="hidden">
    <CodeLine/>
    <Profile :data="data"/>
    <Section :section="Section.Skills"></Section>
    <CodeLine/>
    <template v-for="skillset in data.skills">
      <SkillSet
        :title="skillset.title"
        :skillset="skillset"
        :key="skillset.title"
      />
    </template>
    <CodeLine/>
    <Section :section="Section.CurriculumVitae"></Section>
    <CodeLine/>
    <CurriculumVitae :data="data.curriculumVitae"/>
    <CodeLine/>
    <CodeLine/>
    <ShowCaseSection
      :section="Section.Experiments"
      name="experiments"
      :data="data.experiments"
    />
    <ShowCaseSection
      :section="Section.Projects"
      name="projects"
      :data="data.projects"
    />
    <ShowCaseSection
      :section="Section.Talks"
      name="talks"
      :data="data.talks"
    />
    <ShowCaseSection
      :section="Section.Packages"
      name="packages"
      :data="data.packages"
    />
    <ShowCaseSection
      :section="Section.Misc"
      name="misc"
      :data="data.misc"
    />
    <Legal/>
  </div>
</template>

<script lang="ts">
  import * as data from '../data';

  import SkillSet from './_skill_set.vue';
  import Section from './_section.vue';
  import CodeLine from './_code_line.vue';
  import CurriculumVitae from './_curriculum_vitae.vue';
  import ShowCaseSection from './_show_case_section.vue';
  import Legal from './_legal.vue';
  import Profile from "./_profile.vue";

  export default {
    data() {
      return {
        data,
      };
    },
    computed: {
      year() {
        return new Date().getFullYear();
      },
    },
    components: {
      SkillSet,
      Section,
      CodeLine,
      CurriculumVitae,
      ShowCaseSection,
      Legal,
      Profile,
    },
  };
</script>
