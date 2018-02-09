'use strict';

const templatePath = __filename.replace('.js', '.html');
const template = require('fs').readFileSync(templatePath, 'utf8');

const skillCategory = require('./skill_category');

const skills = require('../data/skills').tree;

module.exports = {
  components: {
    skillCategory
  },
  template,
  props: [],
  data: () => ({
    skills,
  }),
};
