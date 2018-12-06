import DS from 'ember-data';

export default DS.Model.extend({
  starred: DS.attr('boolean', {defaulValue: false}),
  name: DS.attr('string'),
  ingredient: DS.attr('string'),
  calorie: DS.attr('number'),
  time: DS.attr('number'),
  img: DS.attr('string')
});
