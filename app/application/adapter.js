import OrchestrateAdapter from 'ember-orchestrate/adapter';
import config from '../config/environment';

export default OrchestrateAdapter.extend({
  host: config.proxyUri
});
