import Controller from '@ember/controller';
export default Controller.extend({
  actions:{
    editPost(post){
      event.preventDefault();
      post.save().then(() => {
        this.transitionToRoute('detail', post.id);
      })
    }
  }
});
