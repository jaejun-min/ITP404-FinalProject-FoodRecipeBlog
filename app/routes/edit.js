import Route from '@ember/routing/route';
export default Route.extend({
  titleToken: 'Edit My Recipe',
  model(params){
  return this.store.findRecord('post', params.id);
},
actions: {
   loading: function(){
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
