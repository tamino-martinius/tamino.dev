import Vue from 'vue';
require('./init');

const View = require('./views/index.vue').default;

new Vue({
  el: '#view',
  render: display => display(View),
});
