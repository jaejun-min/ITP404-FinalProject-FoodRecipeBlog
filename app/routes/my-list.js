import Route from '@ember/routing/route';

export default Route.extend({
  titleToken:'My Recipe List',
  model(){
    return this.store.findAll('post');
},
actions: {
   loading: function(){
    return true;
  },
  actions: {
  error(error) {
    if (error.status === '403') {
      this.replaceWith('login');
    } else {
      return true;
    }
  }
}
}
});
