// Address Marker-----------------------------------------------------------------------------------
 let addressMarker;

//Bind Document ------------------------------------------------------------------------------------
  $(document).ready(() => {
    $('#geocode').on('click', geocodeAddress)
    $('html').bind('keypress', (e) => {
       if(e.keyCode === 13) {
          geocodeAddress()
          return false
       }
    })
  });

//GeoCoder URL -------------------------------------------------------------------------------------
  const geocoderUrl = 'https://gis.nccde.org/agsserver/rest/services/Composite_Locator/GeocodeServer';

  
// Set Map Address Marker --------------------------------------------------------------------------
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

// Set Map Style -----------------------------------------------------------------------------------

  // Initializes the map on the "map" div and sets the map to the center of Delaware at zoom level 9.
  var map = L.map("map").setView([39.144974,-75.947085], 9);


  // Adds a topographic basemap layer to the map.
  L.esri.basemapLayer("Streets").addTo(map);


 // Sets the color and weight of actively selected polygon border lines.
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

//API Queries: Gathers data from the map's feature objects.-----------------------------------------

  // Queries the state reps polygons for point containment/data.
  const repsData = new featureDataGetter(featureLayers.representative, point, 'repsData', 'NAME', 'PARTY', 'DISTRICT');


  // Queries the state senate polygons for point containment/data.
  const sensData = new featureDataGetter(featureLayers.senate, point, 'sensData', 'NAME', 'PARTY', 'DISTRICT');

  // Queries the delaware communities polygons for point containment/data.
  const communitiesData = new featureDataGetter(featureLayers.communities, point, 'communities', 'COMMUNITY', 'COUNTY', 'UPDATED');



  // Queries the election district polygons for point containment/data.
  const electData = new featureDataGetter(featureLayers.electionDistrict, point, 'electData', 'DISTRICT', 'POPULATION', 'EDRD_2012');


  // Queries the school district polygons for point containment/data.
  const schoolData = new featureDataGetter(featureLayers.schoolDistrict, point, 'schoolData', 'NAME', 'DIST_ID', 'ADMIN');


  // Queries the grade 4 feeder pattern polygons for point containment/data.
  const patternFour = new featureDataGetter(featureLayers.patternFour, point, 'patternFour', 'SCHOOL', 'DISTRICT', 'DIST_ID');

  // Queries the grade 5 feeder pattern polygons for point containment/data.
  const patternFive = new featureDataGetter(featureLayers.patternFive, point, 'patternFive', 'SCHOOL', 'DISTRICT', 'DIST_ID');

  // Queries the grade 6 feeder pattern polygons for point containment/data.
  const patternSix = new featureDataGetter(featureLayers.patternSix, point, 'patternSix', 'SCHOOL', 'DISTRICT', 'DIST_ID');

  // Queries the grade 7 feeder pattern polygons for point containment/data.
  const patternSeven = new featureDataGetter(featureLayers.patternSeven, point, 'patternSeven', 'SCHOOL', 'DISTRICT', 'DIST_ID');

  // Queries the grade 8 feeder pattern polygons for point containment/data.
  const patternEight = new featureDataGetter(featureLayers.patternEight, point, 'patternEight', 'SCHOOL', 'DISTRICT', 'DIST_ID');

  // Queries the grade 9 feeder pattern polygons for point containment/data.
  const patternNine = new featureDataGetter(featureLayers.patternNine, point, 'patternNine', 'SCHOOL', 'DISTRICT', 'DIST_ID');

  // Queries the grade 10 feeder pattern polygons for point containment/data.
  const patternTen = new featureDataGetter(featureLayers.patternTen, point, 'patternTen', 'SCHOOL', 'DISTRICT', 'DIST_ID');

  // Queries the grade 11 feeder pattern polygons for point containment/data.
  const patternEleven = new featureDataGetter(featureLayers.patternEleven, point, 'patternEleven', 'SCHOOL', 'DISTRICT', 'DIST_ID');

  // Queries the grade 12 feeder pattern polygons for point containment/data.
  const patternTwelve = new featureDataGetter(featureLayers.patternTwelve, point, 'patternTwelve', 'SCHOOL', 'DISTRICT', 'DIST_ID');

}


//Map.onClick --------------------------------------------------------------------------------------
  map.on('click', e => {
    if (addressMarker) {
      map.removeLayer(addressMarker)
    };
    addressMarker = L.marker(e.latlng, {
      title: e.latlng.toString()
    });
    addressMarker.addTo(map);
    lookupAllLayers(e.latlng);
  });

