import Controller from '@ember/controller';

import { later } from '@ember/runloop';
export default Controller.extend({
  actions:{
    fav(event){
      event.preventDefault();
      later(this, function () {
        return this.transitionToRoute('my-list');
      }, 1000);
    }
  }
});
