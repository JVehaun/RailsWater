let Dashboard = Dashboard || {};

Dashboard.view_water_map = React.createClass({

  getInitialState: function() {
    console.log(this.props.water_reports);
    return {
      loading: false,
      water_reports: this.props.water_reports
    }
  },

  // componentDidMount: function() {

  //   let locations = [
  //     {lat: -31.563910, lng: 147.154312},
  //     {lat: -33.718234, lng: 150.363181},
  //     {lat: -33.727111, lng: 150.371124},
  //     {lat: -33.848588, lng: 151.209834},
  //     {lat: -33.851702, lng: 151.216968},
  //     {lat: -34.671264, lng: 150.863657},
  //     {lat: -35.304724, lng: 148.662905},
  //     {lat: -36.817685, lng: 175.699196},
  //     {lat: -36.828611, lng: 175.790222},
  //     {lat: -37.750000, lng: 145.116667},
  //     {lat: -37.759859, lng: 145.128708},
  //     {lat: -37.765015, lng: 145.133858},
  //     {lat: -37.770104, lng: 145.143299},
  //     {lat: -37.773700, lng: 145.145187},
  //     {lat: -37.774785, lng: 145.137978},
  //     {lat: -37.819616, lng: 144.968119},
  //     {lat: -38.330766, lng: 144.695692},
  //     {lat: -39.927193, lng: 175.053218},
  //     {lat: -41.330162, lng: 174.865694},
  //     {lat: -42.734358, lng: 147.439506},
  //     {lat: -42.734358, lng: 147.501315},
  //     {lat: -42.735258, lng: 147.438000},
  //     {lat: -43.999792, lng: 170.463352}
  //   ]
  //   let map = new google.maps.Map(document.getElementById('map'), {
  //     zoom: 3,
  //     center: {lat: -28.024, lng: 140.887}
  //   });

  //   // Create an array of alphabetical characters used to label the markers.
  //   let labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  //   // Add some markers to the map.
  //   // Note: The code uses the JavaScript Array.prototype.map() method to
  //   // create an array of markers based on a given "locations" array.
  //   // The map() method here has nothing to do with the Google Maps API.
  //   let markers = locations.map(function(location, i) {
  //     return new google.maps.Marker({
  //       position: location,
  //       label: labels[i % labels.length]
  //     });
  //   });

  //   // Add a marker clusterer to manage the markers.
  //   let markerCluster = new MarkerClusterer(map, markers,
  //       {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

  // },

  onMapCreated: function(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  },

  renderHeader: function() {
    return (
      <div className='panel-header text-center bb1'>
        <div className='row'>
          <h1>Water Map</h1>
        </div>
      </div>
    );
  },

  // AIzaSyBdZD9-sgfd4X820fM1OENkmFf9lJ0l5X8
  renderMap: function() {
    return (
      <iframe
        width="600"
        height="450"
        frameBorder="0"
        src={"https://www.google.com/maps/embed/v1/place?key=AIzaSyBdZD9-sgfd4X820fM1OENkmFf9lJ0l5X8&q=Space+Needle,Seattle+WA"}
        allowFullScreen>
      </iframe>
    );
  },

  renderMapTwo: function() {
    return (
      <div>
        <div id="map"></div>
        <script src="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js">
        </script>
        <script async defer
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBdZD9-sgfd4X820fM1OENkmFf9lJ0l5X8&callback=initMap">
        </script>
      </div>
    );
  },

  renderMarkers: function() {
    return _.map(this.props.water_reports, function(water_report, index) {
      let coords = water_report.location.split(",");
      return <Gmaps.Marker
        key={water_report.report_num}
        lat={coords[0]}
        lng={coords[1]}
        draggable={false} />
    });
  },

  renderMapThree: function() {
    let coords = {
      lat: 51.5258541,
      lng: -0.08040660000006028
    };
    return (
      <Gmaps.Gmaps
        width={'800px'}
        height={'600px'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={12}
        loadingMessage={'Be happy'}
        params={{v: '3.exp', key: 'AIzaSyBExlYlXmGH3_CF38ZYaxO1xYmq2e3C5M4'}}
        onMapCreated={this.onMapCreated}>
        { this.renderMarkers() }
      </Gmaps.Gmaps>
    );
  },

  renderBody: function() {
    return (
      <div className='panel-body'>
        { this.renderMapThree() }
      </div>
    );
  },

  render: function() {
    return (
      <div className='col-xs-9 panel panel-default row mb10 relative container800'>
          { this.renderHeader() }
          { this.renderBody() }
      </div>
    );
  }
});