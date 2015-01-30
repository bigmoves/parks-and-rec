import Ember from 'ember';

var debounce = Ember.run.debounce;

export default Ember.Controller.extend({
  park: Ember.inject.controller('parks/park'),
  query: null,
  searchResults: null,

  queryDidChange: function() {
    debounce(this, this.getSearchResults, 200);
  }.observes('query'),

  getSearchResults() {
    var query = {
      query: `value.Property: ${this.get('query')}`
    };

    if (!this.get('query')) {
      this.set('searchResults', null);
      return;
    }

    this.store.find('park', query)
      .then(results => {
        this.set('searchResults', results);
      });
  }
});
