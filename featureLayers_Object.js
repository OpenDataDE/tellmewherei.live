const featureLayers = {
    representative: L.esri.featureLayer({
      url: 'https://firstmap.delaware.gov/arcgis/rest/services/Boundaries/DE_DistrictsRepresentative/MapServer/0'
    }),
    senate: L.esri.featureLayer({
      url: 'https://firstmap.delaware.gov/arcgis/rest/services/Boundaries/DE_DistrictsSenate/MapServer/0'
    }),
    electionDistrict: L.esri.featureLayer({
      url: 'https://firstmap.delaware.gov/arcgis/rest/services/Boundaries/DE_Election_Boundaries/MapServer/0'
    }),
    communities: L.esri.featureLayer({
      url: 'https://firstmap.gis.delaware.gov/arcgis/rest/services/Boundaries/DE_Communities/MapServer/0/'
    }),
    schoolDistrict: L.esri.featureLayer({
      url: 'https://firstmap.delaware.gov/arcgis/rest/services/Boundaries/DE_SchoolDistricts/MapServer/0'
    }),
    patternFour: L.esri.featureLayer({
      url: 'https://firstmap.delaware.gov/arcgis/rest/services/Boundaries/DE_School_Feeder_Patterns/MapServer/4'
    }),
    patternFive: L.esri.featureLayer({
      url: 'https://firstmap.delaware.gov/arcgis/rest/services/Boundaries/DE_School_Feeder_Patterns/MapServer/5'
    }),
    patternSix: L.esri.featureLayer({
      url: 'https://firstmap.delaware.gov/arcgis/rest/services/Boundaries/DE_School_Feeder_Patterns/MapServer/6'
    }),
    patternSeven: L.esri.featureLayer({
      url: 'https://firstmap.delaware.gov/arcgis/rest/services/Boundaries/DE_School_Feeder_Patterns/MapServer/7'
    }),
    patternEight: L.esri.featureLayer({
      url: 'https://firstmap.delaware.gov/arcgis/rest/services/Boundaries/DE_School_Feeder_Patterns/MapServer/8'
    }),
    patternNine: L.esri.featureLayer({
      url: 'https://firstmap.delaware.gov/arcgis/rest/services/Boundaries/DE_School_Feeder_Patterns/MapServer/9'
    }),
    patternTen: L.esri.featureLayer({
      url: 'https://firstmap.delaware.gov/arcgis/rest/services/Boundaries/DE_School_Feeder_Patterns/MapServer/10'
    }),
    patternEleven: L.esri.featureLayer({
      url: 'https://firstmap.delaware.gov/arcgis/rest/services/Boundaries/DE_School_Feeder_Patterns/MapServer/11'
    }),
    patternTwelve: L.esri.featureLayer({
      url: 'https://firstmap.delaware.gov/arcgis/rest/services/Boundaries/DE_School_Feeder_Patterns/MapServer/12'
    })


  };
