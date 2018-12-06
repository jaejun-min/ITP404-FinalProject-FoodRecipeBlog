import Route from '@ember/routing/route';

export default Route.extend({
  titleToken:'Recipes',
  model(){
    return this.store.findAll('post');
  },
  actions: {
   loading() {
     return true;
   },
   error(error) {
     if (error.status === '403') {
       this.replaceWith('login');
     } else {
       return true;
     }
   }
 }
});
