require('./init');

const View = require('./views/index.vue').default;
require('./style.styl');
import Vue from 'vue';
import { state } from './data';
import { snakeCase } from './util';
import { Section, Language, languages } from './data_types';

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
    return {
      Section,
      state,
    };
  },
  methods: {
    snakeCase(str: string) {
      return (<any>this).isRuby ? snakeCase(str) : str;
    }
  },
  computed: {
    isJs() {
      return this.state.currentLanguage === Language.javascript
        || this.state.currentLanguage === Language.typescript;
      ;
    },
    isTs() {
      return this.state.currentLanguage === Language.typescript;
      ;
    },
    isRuby() {
      return this.state.currentLanguage === Language.ruby;
    },
  },
});

new Vue({
  el: '#view',
  render: display => display(View),
});

console.log(
  '%c~/taminomartinius.de %c%c  master %c cat %cREADME.md\n\n%c# www.taminomartinius.de\n\nCheck out the source on [GitHub](https://github.com/tamino-martinius/www.taminomartinius.de)',
  'font-family: "Fira Code", monospace; padding: 2px 0; background-color: #2E8CCF; color: #000000;',
  'font-family: "Fira Code", monospace; padding: 2px 0; background-color: #85981C; color: #2E8CCF;',
  'font-family: "Fira Code", monospace; padding: 2px 0; background-color: #85981C; color: #000000;',
  'font-family: "Fira Code", monospace; padding: 2px 0; color: #75880C;',
  'font-family: "Fira Code", monospace; padding: 2px 0; color: #011;',
  'font-family: "Fira Code", monospace; padding: 2px 0; color: #233;',
);
