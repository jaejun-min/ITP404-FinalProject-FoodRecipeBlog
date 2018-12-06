import Route from '@ember/routing/route';
export default Route.extend({
  titleToken:'Create My Recipe',
  setupController(controller, model) {
  this._super(controller, model);
  controller.set('title','');
  controller.set('img', 'https://www.edamam.com/web-img/0c1/0c1293b4d206a4e282780576ddd14873')
  controller.set('calorie', '');
  controller.set('time', '');
  controller.set('ingredient', '');
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
