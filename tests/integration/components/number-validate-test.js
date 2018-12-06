import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Integration | Component | number-validate', function(hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);
  test('test number validate error', async function(assert){

    this.set('time', 'hello');
    await render(hbs`<NumberValidate
        data-test="validate"
        @calorie={{time}}
      />`);

     assert.dom('[data-test="validate"]').hasText('Invalid input, please enter number');
   });
   test('test number validate success', async function(assert){

     this.set('time', 123);
     await render(hbs`<NumberValidate
         data-test="validate"
         @calorie={{time}}
       />`);

      assert.dom('[data-test="validate"]').hasText('Ok!');
    });
    test('test number validate from error->success', async function(assert){

      this.set('time', "hello");
      await render(hbs`<NumberValidate
        data-test="validate"
        @calorie={{time}}
      />`);
      assert.dom('[data-test="validate"]').hasText('Invalid input, please enter number');
      this.set('time', 123);
      assert.dom('[data-test="validate"]').hasText('Ok!');
   });
});
