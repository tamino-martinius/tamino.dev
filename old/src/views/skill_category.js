'use strict';

const templatePath = __filename.replace('.js', '.html');
const template = require('fs').readFileSync(templatePath, 'utf8');

const skillSubcategory = require('./skill_subcategory');

module.exports = {
  components: {
    skillSubcategory
  },
  template,
  props: [
    'skills',
    'skillKey',
    'skillTitle',
  ],
};
