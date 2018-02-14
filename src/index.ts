require('./init');

const View = require('./views/index.vue').default;
require('./style.styl');
import Vue from 'vue';

new Vue({
  el: '#view',
  render: display => display(View),
});
