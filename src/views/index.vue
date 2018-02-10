<template>
  <div>
    <Section :section="Section.Header"></Section>
    <CodeLine/>
    <Variable name="myName">
      <String :value="data.myName"></String>
    </Variable>
    <Variable name="profession">
      <String :value="data.profession"></String>
    </Variable>
    <CodeLine/>
    <CodeLine/>
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
  </div>
</template>

<script lang="ts">
  import * as data from '../data';
  import {
    Section as SectionType,
  } from '../data_types';

  console.log(data);

  import Job from './_job.vue';
  import SkillSet from './_skill_set.vue';
  import Section from './_section.vue';
  import CodeLine from './_code_line.vue';
  import Variable from './_variable.vue';
  import String from './_string.vue';
  import CurriculumVitae from './_curriculum_vitae.vue';
  import ShowCaseSection from './_show_case_section.vue';

  export default {
    data() {
      return {
        Section: SectionType,
        data,
      };
    },
    components: {
      Job,
      SkillSet,
      Section,
      CodeLine,
      Variable,
      String,
      CurriculumVitae,
      ShowCaseSection,
    },
  };
</script>
