import Controller from '@ember/controller';

import { later } from '@ember/runloop';
export default Controller.extend({
  actions:{
    fav(event){
      event.preventDefault();
      // return new RSVP.Promise((resolve) => {
      //   later(this, () => {
      //     resolve();
      //     this.transitionToRoute('my-list');
      //   });
      // },3000);
      later(this, function () {
        return this.transitionToRoute('my-list');
      }, 1000);
    }
  }
});
