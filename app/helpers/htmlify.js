import Ember from 'ember';
import random from 'open-ipsum-ui/utils/random-int';

export function htmlify(params) {
  let text = params[0].match(/[^\.!\?]+[\.!\?]+/g);
  let holder = [];

  for (let i =0; i < text.length; i++) {
    let r = random(2, 6) + i;
    holder.push(text.slice(i, r));
    i = r;
  }

  for (let i =0; i < holder.length; i++) {
    holder[i].unshift('<p class="content-text">');
    holder[i].push('</p>');
    holder[i] = holder[i].join('');
  }

  return holder.join('');
}

export default Ember.Helper.helper(htmlify);