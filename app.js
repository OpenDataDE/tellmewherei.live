// Address Marker------------------------------------------------------
 let addressMarker;

//Bind Document -------------------------------------------------------------------------
  $(document).ready(() => {
    $('#geocode').on('click', geocodeAddress)
    $('html').bind('keypress', (e) => {
       if(e.keyCode === 13) {
          geocodeAddress()
          return false
       }
    })
  });

//GeoCoder URL --------------------------------------------------------------------------
  const geocoderUrl = 'https://gis.nccde.org/agsserver/rest/services/Composite_Locator/GeocodeServer';

  
// Set Map Style -----------------------------------------------------------------------------
  function geocodeAddress() {
    if (addressMarker) {
      map.removeLayer(addressMarker)
    }
    const address = document.querySelector('#address').value
    L.esri.Geocoding.geocode({
      url: geocoderUrl,
    }).text(address).run((err, response) => {
      if (err) {
        console.log(err)
        return
      }
      addressMarker = L.marker(response.results[0].latlng, {
        title: address
      })
      addressMarker.addTo(map)
      lookupAllLayers(response.results[0].latlng)
    })
  };

   const currentFeatures = {};


  // Sets the map to the center of Delaware at zoom level 9.
  var map = L.map("map").setView([39.144974,-75.947085], 9);


  // Adds a topographic basemap layer to the map.
  L.esri.basemapLayer("Topographic").addTo(map);

 // Sets the color and weight of polygon border lines.
  function setStyle(feature) { 
    if (feature.properties['PARTY'] === 'D') {
      return { color: 'blue', weight: 2 };
    } else if (feature.properties['PARTY'] === 'R') {
      return { color: 'red', weight: 2 };
    } else {
      return { color: 'white', weight: 2 };
    }  
  }
  function setElectionDistrictStyle(feature) {
    return { color: 'black', weight: 5 }
  }
  function setSchoolDistrictStyle(feature) {
    return {color: 'yellow', weight: 3 }
  }

//Lookup All Layers --------------------------------------------------------------------------------
  function lookupAllLayers(latlng) 
  {
    Object.keys(currentFeatures).forEach(feature => {
      if (currentFeatures[feature]) {
        map.removeLayer(currentFeatures[feature]);
      }
    })
  

  const point = L.latLng(latlng);

//API Queries: Gathers data from the polygon's feature objects.----------------------------------------------------------------


  // Queries the state reps polygons for point containment/data.
  const repsData = new featurePropsGetter(featureLayers.representative, point, 'repsData');


  // Queries the state senate polygons for point containment/data.
  const sensData = new featurePropsGetter(featureLayers.senate, point, 'sensData');


  // Queries the election district polygons for point containment/data.
  const electData = new featurePropsGetter(featureLayers.electionDistrict, point, 'electData');


  // Queries the school district polygons for point containment/data.
  const schoolData = new featurePropsGetter(featureLayers.schoolDistrict, point, 'schoolData');


  // Queries the grade 2 feeder pattern polygons for point containment/data.
  //const g2Data = new featurePropsGetter(featureLayers.feederPatternTwo, point, 'g2Data');

}


//Map.onClick ----------------------------------------------------------------------------
  map.on('click', e => {
    if (addressMarker) {
      map.removeLayer(addressMarker)
    }
    addressMarker = L.marker(e.latlng, {
      title: e.latlng.toString()
    })
    addressMarker.addTo(map)
    lookupAllLayers(e.latlng)
  });

