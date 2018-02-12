<template>
  <div class="stage" @click.stop="toggle" :class="{ collapsed: collapsed }">
    <Comment
      :indentation="1"
      v-if="collapsed"
      :comment="abbreviation"
    >
      <Collapsed/>
    </Comment>
    <template v-if="!collapsed">
      <CodeLine>
        <Tab/>
        <span class="expression">{</span>
      </CodeLine>
      <slot/>
      <template v-if="data.description">
        <CodeLine>
          <Tab/><Tab/>
          <span class="variable">description</span>
          <span class="expression">:</span>
          <span class="white-space space"></span>
          <span class="string">&#96;</span>
        </CodeLine>
        <MultiLineString
          :value="data.description.trim()"
          :indentation="3"
        />
        <CodeLine>
          <Tab/><Tab/>
          <span class="string">&#96;</span>
          <span class="expression">,</span>
        </CodeLine>
      </template>
      <CodeLine>
        <Tab/><Tab/>
        <span class="variable">startsAt</span>
        <span class="expression">:</span>
        <span class="white-space space"></span>
        <Date :value="data.startsAt"></Date>
        <span class="expression">,</span>
      </CodeLine>
      <CodeLine>
        <Tab/><Tab/>
        <span class="variable">endsAt</span>
        <span class="expression">:</span>
        <span class="white-space space"></span>
        <Date :value="data.endsAt"></Date>
        <span class="expression">,</span>
      </CodeLine>
      <CodeLine>
        <Tab/><Tab/>
        <span class="variable">skills</span>
        <span class="expression">:</span>
        <span class="white-space space"></span>
        <span class="expression">[</span>
      </CodeLine>
      <CodeLine v-for="(skill, key) in data.skills" :key="key">
        <Tab/><Tab/><Tab/>
        <span class="variable progress" :style="{ '--value': skill.level }">{{key}}</span>
        <span class="expression">,</span>
      </CodeLine>
      <CodeLine>
        <Tab/><Tab/>
        <span class="expression">],</span>
      </CodeLine>
      <CodeLine>
        <Tab/><span class="expression">},</span>
      </CodeLine>
      <CodeLine v-if="!isLast"/>
    </template>
  </div>
</template>

<script lang="ts">
  import CodeLine from './_code_line.vue';
  import Comment from './_comment.vue';
  import Tab from './_tab.vue';
  import String from './_string.vue';
  import MultiLineString from './_multi_line_string.vue';
  import Date from './_date.vue';
  import Collapsed from './_collapsed.vue';

  export default {
    props: [
      'isLast',
      'data',
      'abbreviation',
    ],
    data() {
      return {
        collapsed: true,
      };
    },
    methods: {
      toggle() {
        this.collapsed = !this.collapsed;
      },
    },
    components: {
      CodeLine,
      Comment,
      Tab,
      String,
      MultiLineString,
      Date,
      Collapsed,
    },
  };
</script>
