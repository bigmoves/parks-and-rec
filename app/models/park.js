import DS from 'ember-data';

export default DS.Model.extend({
  address: DS.attr('string'),
  property: DS.attr('string'),
  subArea: DS.attr('string'),
  zip: DS.attr('string'),
  amenities: DS.attr(),
  loc: DS.attr()
});
