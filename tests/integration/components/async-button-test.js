import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | async-button', function(hooks) {
  setupRenderingTest(hooks);
  test('change button text', async function(assert){


    await render(hbs`  <AsyncButton
        class="btn btn-md btn-primary m-3"
        data-test="asyncBtn"
        @defaultText="Go to My List"
        @pendingText="Going..."
      >
      </AsyncButton>`);

        await click('[data-test="asyncBtn"]');

        assert.dom('[data-test="asyncBtn"]').hasText('Going...');
   });
});
