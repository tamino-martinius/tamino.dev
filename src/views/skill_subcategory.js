'use strict';

const templatePath = __filename.replace('.js', '.html');
const template = require('fs').readFileSync(templatePath, 'utf8');

const skill = require('./skill');

module.exports = {
  components: {
    skill,
  },
  template,
  props: [
    'skills',
    'skillKey',
    'skillTitle',
  ],
};
