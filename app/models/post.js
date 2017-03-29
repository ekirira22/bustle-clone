import DS from 'ember-data';

export default DS.Model.extend({
  owner: DS.attr(),
  head: DS.attr(),
  body: DS.attr(),
  snippet: DS.attr(),
  image: DS.attr()
});
