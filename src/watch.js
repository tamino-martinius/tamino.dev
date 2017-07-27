'use strict';

const build = require('./build.js');
const watch = require('node-watch');

watch([
  'src/data',
  'src/images',
  'src/script',
  'src/style',
  'src/views',
  'src/public',
], function(filename) {
  console.time('build');
  build
    .processPage()
    .then(build.reloadPage)
    .then(console.timeEnd('build'));
});

console.time('build');
build
  .processPage()
  .then(build.openPage)
  .then(console.timeEnd('build'));
