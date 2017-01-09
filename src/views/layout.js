'use strict';

const hero = require('./hero');
const navbar = require('./navbar');
const skillTree = require('./skill_tree');
const timeline = require('./timeline');
const cv = require('./cv');
const bottombar = require('./bottombar');

const templatePath = __filename.replace('.js', '.html');
const template = require('fs').readFileSync(templatePath, 'utf8');

module.exports = {
  components: {
    hero,
    navbar,
    skillTree,
    timeline,
    cv,
    bottombar,
  },
  template,
  props: [
    'styleContent',
    'imagesContent',
    'iconsContent',
    'vendorScriptContent',
    'scriptContent',
  ],
  // data: function() {
  //   console.log('this', this.imagesContent);
  //   return {};
  // },
};
