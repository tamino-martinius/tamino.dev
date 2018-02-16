require('./init');

const View = require('./views/index.vue').default;
require('./style.styl');
import Vue from 'vue';
import { state } from './data';
import { snakeCase } from './util';
import { Language, languages } from './data_types';

let theme = 0;
const themeCount = 3;

if (state.language === undefined) {
  state.language = languages[Math.floor(Math.random() * languages.length)];
}

document.addEventListener('keydown', function (e) {
  switch (e.which) {
    case 32: {
      e.preventDefault();
      theme += 1;
      for (var i = 0; i < themeCount; i++) {
        document.body.classList.remove(`theme-${i}`);
      }
      document.body.classList.add(`theme-${theme % themeCount}`);
      break;
    }
    case 82: {
      state.language = Language.ruby;
      break;
    }
    case 74: {
      state.language = Language.javascript;
      break;
    }
    case 84: {
      state.language = Language.typescript;
      break;
    }
  }
});

Vue.mixin({
  data() {
    return state;
  },
  methods: {
    snakeCase(str: string) {
      return (<any>this).isRuby ? snakeCase(str) : str;
    }
  },
  computed: {
    isJs() {
      return this.currentLanguage === Language.javascript
        || this.currentLanguage === Language.typescript;
      ;
    },
    isTs() {
      return this.currentLanguage === Language.typescript;
      ;
    },
    isRuby() {
      return this.currentLanguage === Language.ruby;
    },
  },
});

new Vue({
  el: '#view',
  render: display => display(View),
});
