import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Integration | Component | star-button', function(hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);
  test('test starred button', async function(assert) {

      this.set('starred', false);
      await render(hbs`<StarButton
          @on={{starred}}
        />`);
      assert.equal(this.element.querySelector('[data-test="testStarred"]').value,"false");


      this.set('starred', true);
      await render(hbs`<StarButton
          @on={{starred}}
        />`);
      assert.equal(this.element.querySelector('[data-test="testStarred"]').value,"true");

    });
  });
