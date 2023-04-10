import initSwitch from './themeSwitch.js';
import initStringTruncate from './stringTruncate.js';
import initSortToggle from './newestLatestToggle.js';
import initInfinityScrolle from './infinityScroll/generateOnScroll.js';

// default args
import { args } from './stringTruncate.js';

const listInits = [
  initSwitch,
  initStringTruncate,
  initSortToggle,
  initInfinityScrolle,
];

const listArguments = [null, args, null, ['#cardTemplate', '#cardList']];

/**
 * Init modules with arguments
 * @param  {[Function]} inits   The init module functions
 * @param  {[Array]}    props   The arguments to modules by index
 */
(function init(inits, props) {
  for (let i = 0; i < inits.length; i++) {
    try {
      if (props[i]) {
        inits[i](...props[i]);
      } else {
        inits[i]();
      }
    } catch (e) {
      console.error(e);
    }
  }
})(listInits, listArguments);
