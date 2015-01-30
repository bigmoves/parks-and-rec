import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find('park', params.parkId);
  },

  actions: {
    didTransition() {
      this.send('resetSearch');
    }
  }
});
