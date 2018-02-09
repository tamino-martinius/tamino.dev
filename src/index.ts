require('./init');

const View = require('./views/index.vue').default;
require('./style.styl');
import Vue from 'vue';

const root = document.createElement('div');
root.id = 'view';
document.body.appendChild(root);

new Vue({
  el: '#view',
  render: display => display(View),
});
