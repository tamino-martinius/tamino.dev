require('./init');

const View = require('./views/index.vue').default;
require('./style.styl');
import Vue from 'vue';

new Vue({
  el: '#view',
  render: display => display(View),
});

let theme = 0;
const themeCount = 3;

document.addEventListener('keydown', function (e) {
  if (e.which === 32) {
    e.preventDefault();
    theme += 1;
    for (var i = 0; i < themeCount; i++) {
      document.body.classList.remove(`theme-${i}`);
    }
    document.body.classList.add(`theme-${theme % themeCount}`);
  }
});
