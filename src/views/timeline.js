'use strict';

const templatePath = __filename.replace('.js', '.html');
const template = require('fs').readFileSync(templatePath, 'utf8');

const timeline = require('../data/timeline');

module.exports = {
  template,
  props: [],
  data: () => ({
    timeline,
  }),
};
