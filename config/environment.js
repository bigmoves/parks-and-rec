/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'parks-and-rec',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
        'ember-htmlbars': true,
        'ember-htmlbars-component-generation': true,
        'ember-htmlbars-inline-if-helper': true,
        'ember-htmlbars-attribute-syntax': true,
        'ember-metal-injected-properties': true,
        'ember-htmlbars-each-with-index': true,
        'new-computed-syntax': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    mapboxToken: 'pk.eyJ1IjoiY2hhZHRtaWxsZXIiLCJhIjoiS29WdkJMbyJ9.JX_CaVO6jbhOd43imqZ_vA',

    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self'",
      'font-src': "'self'",
      'connect-src': "'self' http://a.tiles.mapbox.com",
      'img-src': "'self' data: http://a.tiles.mapbox.com http://b.tiles.mapbox.com",
      'style-src': "'self'",
      'media-src': "'self'"
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
