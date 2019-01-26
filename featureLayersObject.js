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
    schoolDistrict: L.esri.featureLayer({
      url: 'https://firstmap.delaware.gov/arcgis/rest/services/Boundaries/DE_SchoolDistricts/MapServer/0'
    }),
    feederPatternTwo: L.esri.featureLayer({
      url: 'https://firstmap.delaware.gov/arcgis/rest/services/Boundaries/DE_School_Feeder_Patterns/MapServer/0'
    })

  };
