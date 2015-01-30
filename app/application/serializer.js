import Ember from 'ember';
import OrchestrateSerializer from 'ember-orchestrate/serializer';

export default OrchestrateSerializer.extend({
  keyForAttribute(attr) {
    return attr.capitalize();
  }
});
