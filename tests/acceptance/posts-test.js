import { module, test } from 'qunit';
import { visit, currentURL, click, fillIn } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import window, { reset } from 'ember-window-mock';
module('Acceptance | posts', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);
  hooks.afterEach(function() {
    reset();
  })
  test('update recipe', async function(assert){

    await visit('/posts/new');
    await fillIn('#title', 'pasta');
    await fillIn('#calorie', 200);
    await fillIn('#time', 200);
    await click('[data-test="create"]');
    assert.equal(currentURL(), '/posts/1');
  });

  test('read a single food', async function(assert){
    server.create('post', {
      title: 'chicken',
      ingredient: 'put salt',
      calorie: 10,
      time: 4
    })

    await visit('/posts/1');

    assert.dom('[data-test="title"]').hasText('chicken');
    assert.dom('[data-test="testTime"]').hasText('Cooking Time: 4');
    assert.dom('[data-test="testCalorie"]').hasText('Calorie: 10');
    assert.dom('[data-test="testIngredient"]').hasText('put salt');
  });
  test('deleting a post', async function(assert){
      server.createList('post', 1);
      window.confirm = () =>true;   //assuming we click ok

      await visit('/');
      await click('[data-test="delete-post"]');
      assert.dom('[data-test="post"]').exists({ count: 0});
    });

  test('create/view list of foods', async function(assert){
    server.createList('post',10);

    await visit('/');
    assert.equal(currentURL(), '/');
    assert.dom('[data-test="post"]').exists({ count: 10});
  });
  test('canceling deleting a post', async function(assert){
  server.createList('post', 1);
  window.confirm = () =>false;   //assuming we click ok

  await visit('/');
  await click('[data-test="delete-post"]');
  assert.dom('[data-test="post"]').exists({ count: 1});

});

});
