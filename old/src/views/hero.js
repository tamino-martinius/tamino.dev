'use strict';

const templatePath = __filename.replace('.js', '.html');
const template = require('fs').readFileSync(templatePath, 'utf8');

const subtitles = [
  'Full Stack developer',
  '10+ Years of Experience',
  'working in Berlin',
];

module.exports = {
  template,
  props: [],
  data: () => ({
    subtitles,
  }),
};
