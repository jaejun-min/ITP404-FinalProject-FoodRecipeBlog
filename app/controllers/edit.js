import Controller from '@ember/controller';
import window from 'ember-window-mock';
export default Controller.extend({
  actions:{
    // editPost(post){
    //   return new RSVP.Promise((resolve) => {
    //     later(() => {
    //       resolve();
    //           post.save().then(() =>{
    //             this.transitionToRoute('detail', post.id);
    //           });
    //     });
    //   });
    //   }
    editPost(post){
      let confirmed = window.confirm(
        'Are you sure you want to delete this post?');
      if(confirmed){
        post.save().then(() =>{
          this.transitionToRoute('detail', post.id);
        });
      }
    }
  }
});
