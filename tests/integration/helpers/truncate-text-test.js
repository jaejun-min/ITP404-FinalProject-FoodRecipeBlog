import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | truncate-text', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('truncate test', async function(assert) {
    this.set('inputValue', 'hello world');

    await render(hbs`{{truncate-text inputValue 5}}`);

    assert.equal(this.element.textContent.trim(), 'hello...');

    this.set('inputValue', 'Hi')
    assert.equal(this.element.textContent.trim(), 'Hi');
  });
});
