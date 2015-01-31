/*global L*/

import Ember from 'ember';
import config from '../../config/environment';

export default Ember.Component.extend({
  elementId: 'map',
  parks: null,
  location: null,

  didInsertElement() {
    L.mapbox.accessToken = config.mapboxToken;
    var map = this.map = L.mapbox.map('map', 'chadtmiller.l1p58pml', {
      zoomControl: false
    });
    new L.Control.Zoom({ position: 'bottomright' }).addTo(map);

    if (this.get('location')) {
      map.setView([this.get('location.lat'), this.get('location.lon')], 17);
    }

    var parkPlaces = L.layerGroup().addTo(map);

    this.get('parks').forEach(park => {
      var latlng = L.latLng(park.get('loc.lat'), park.get('loc.lon'));
      L.marker(latlng, {
        icon: L.mapbox.marker.icon({
          'marker-color': '#333',
          'marker-symbol': 'park',
          'marker-size': 'medium'
        })
      })
      .on('dblclick', () => {
        this.sendAction('transitionToPark', park);
      })
      .addTo(parkPlaces);
    });
  },

  locationDidChange: function() {
    this.map.setView([this.get('location.lat'), this.get('location.lon')], 17);
  }.observes('location')
});
