'use strict';

const templatePath = __filename.replace('.js', '.html');
const template = require('fs').readFileSync(templatePath, 'utf8');

module.exports = {
  template,
};
