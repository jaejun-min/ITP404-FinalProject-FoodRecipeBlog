import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('detail', {path: '/posts/:id'}, function() {});
  this.route('my-list');
  this.route('create', {path: '/posts/new'});
  this.route('edit', {path:'/posts/:id/edit'});

});

export default Router;
