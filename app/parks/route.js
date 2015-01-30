import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.find('park', { limit: 350 });
  },

  actions: {
    resetSearch() {
      this.controller.set('query', '');
      this.controller.set('searchResults', null);
    },

    transitionToPark(park) {
      this.transitionTo('parks.park', park.get('id'));
    }
  }
});
