import Controller from '@ember/controller';
export default Controller.extend({
  actions: {
    createRecipe(event){
      event.preventDefault();
      let post = this.store.createRecord('post',{
        name: this.name,
        img: this.img,
        calorie: this.calorie,
        time: this.time,
        ingredient: this.ingredient
      });
      post.save().then(() =>{
        this.transitionToRoute('detail', post.id);
      });
  }
}
});
