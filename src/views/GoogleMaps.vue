<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
    <h2 class="display-6 text-white">Codigo Panel: &nbsp;
    <input type="text" class="display-6 text-gray" v-model="panelcode"/>

</h2>
    </base-header>

    <b-container style= "margin-bottom: 50px;"  fluid class="mt--7">
      <b-row>
        <b-col>
          <b-card no-body class="border-0" style=" box-shadow: 3px 3px 3px gray">
            <div id="map-custom" class="map-canvas"
                 style="height: 400px;"></div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    <!-- Card stats -->
    <b-row class="m-3">
      <b-col xl="4" md="12">
        <stats-card title="IMPACTOS TOTALES"
                    type="gradient-info"
                    sub-title="350,897"
                    icon="ni ni-chart-bar-32"
                    class="mb-4">

          <template slot="footer">
            <strong>
            <span class="text-success mr-2">3.48%</span>
            <span class="text-nowrap">MENSUAL</span>
            </strong>
          </template>
        </stats-card>
      </b-col>
      <b-col xl="4" md="12">
        <stats-card title="ORIENTACIÓN ESCALAR"
                    type="gradient-green"
                    sub-title="-101,35"
                    icon="ni ni-compass-04"
                    class="mb-4">

          <template slot="footer">
            <strong>
            <span class="text-success mr-2">12.18%</span>
            <span class="text-nowrap">MENSUAL</span>
            </strong>
          </template>
        </stats-card>
      </b-col>
      <b-col xl="4" md="12">
        <stats-card title="SALDO MONETIZABLE"
                    type="gradient-orange"
                    sub-title=".616"
                    icon="ni ni-money-coins"
                    class="mb-4">

          <template slot="footer">
            <strong>
            <span class="text-danger mr-2">5.72%</span>
            <span class="text-nowrap">ANUAL</span>
            </strong>
          </template>
        </stats-card>

      </b-col>
      <!-- <b-col xl="3" md="6">
        <stats-card title="Performance"
                    type="gradient-orange"
                    sub-title="49,65%"
                    icon="ni ni-chart-bar-32"
                    class="mb-4">

          <template slot="footer">
            <span class="text-success mr-2">54.8%</span>
            <span class="text-nowrap">Since last month</span>
          </template>
        </stats-card>
      </b-col> -->
    </b-row>
  </div>
</template>
<script>
  import { API_KEY } from './Maps/API_KEY';
  import GoogleMapsLoader from 'google-maps';

  GoogleMapsLoader.KEY = API_KEY;

  export default {
    data() {
      return {
        panelcode: ' M_308841',
      }
    },
    methods: {
      initMap(google) {
        let map, lat = 40.42610994952922, lng = -3.7022029752503713, color = "#5e72e4";
        map = document.getElementById('map-custom');

        let myLatlng = new google.maps.LatLng(lat, lng);
        let mapOptions = {
          zoom: 10,
          scrollwheel: true,
          center: myLatlng,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          styles: [{
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [{ "color": "#444444" }]
          }, {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [{ "color": "#f2f2f2" }]
          }, {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [{ "visibility": "off" }]
          }, {
            "featureType": "road",
            "elementType": "all",
            "stylers": [{ "saturation": -100 }, { "lightness": 45 }]
          }, {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [{ "visibility": "simplified" }]
          }, {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [{ "visibility": "off" }]
          }, {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [{ "visibility": "off" }]
          }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": color }, { "visibility": "on" }] }]
        }

        map = new google.maps.Map(map, mapOptions);

        let marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          animation: google.maps.Animation.DROP,
          title: 'Hello World!'
        });

        let contentString = '<div class="info-window-content"><h2>Argon Dashboard PRO</h2>' +
          '<p>A beautiful premium dashboard for Bootstrap 4.</p></div>';

        let infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        google.maps.event.addListener(marker, 'click', function () {
          infowindow.open(map, marker);
        });
      }
    },
    mounted() {
      GoogleMapsLoader.load(google => {
        this.initMap(google);
      });
    }
  };
</script>
