/*
<b>Address</b>
    <form>
      <input id="address" type="text" value="616 Nesting Ln, Middletown, DE 19709"></input>
      <input id="geocode" value="Lookup" type="button"></input>
    </form>
*/    

/*
               const props= document.createElement("ol");
               for (var i = 0; i < propsArr.length; i++) {
                 var listItem = document.createElement("li");
                 listItem.innerText = propsArr[i];
                 props.appendChild(listItem);
                 this.elementID.appendChild(props);
                }
                */

/*
function featurePropsGetter (featureLayerName, point, elementID) {
    this.featureLayerName = featureLayerName;
    this.point = point;
    this.elementID = document.getElementById(elementID);
    this.getProperties = this.featureLayerName
         .query()
         .contains(point)
         .run((error, featureCollection) => {
             featureCollection.features.forEach(feature => {
                $(this.elementID).text(function() {
                    return feature.properties.NAME + " " 
                    + feature.properties.PARTY + " "
                    + feature.properties.DISTRICT + " "
                    + feature.properties.POPULATION + " "
                    + feature.properties.SHORTNAME + " "
                    + feature.properties.ADMIN + " "
                    + feature.properties.SCHOOL + " "
                    + feature.properties.DISTRICT;
                });
      })
    });
  }
*/


/*
const propsValuesArr = Object.values(feature.properties);
const props = document.createElement("ul");
for (var i = 0; i < propsArr.length; i++) {
var listItem = document.createElement("li");
listItem.innerText = propsValuesArr[i];
props.appendChild(listItem);
}
*/


/*
// query the representative polygons for point containment
    featureLayers.representative.query().contains(L.latLng(latlng)).run((error, featureCollection) => {
      featureCollection.features.forEach(feature => {
        currentFeatures.representative = L.geoJSON(feature, { style: setRepresentativeStyle })
        $('#stateRepresentative td:eq(1)').text(feature.properties.NAME)
        $('#stateRepresentative td:eq(2)').text(feature.properties.PARTY)
        currentFeatures.representative.addTo(map);
      })
    });
  };
  
  // query the senate polygons for point containment
    featureLayers.senate.query().contains(L.latLng(latlng)).run((error, featureCollection) => {
      featureCollection.features.forEach(feature => {
        currentFeatures.senate = L.geoJSON(feature, { style: setElectionDistrictStyle })
        $('#stateSenator td:eq(1)').text(feature.properties.NAME)
        $('#stateSenator td:eq(2)').text(feature.properties.PARTY)
        currentFeatures.electionDistrict.addTo(map);
      })
    });
  };
  
  // query the election district polygons for point containment
    featureLayers.electionDistrict.query().contains(L.latLng(latlng)).run((error, featureCollection) => {
      featureCollection.features.forEach(feature => {
        currentFeatures.electionDistrict = L.geoJSON(feature, { style: setElectionDistrictStyle })
        $('#electionDistrict td:eq(1)').text(feature.properties.DISTRICT)
        $('#electionDistrict td:eq(2)').text(feature.properties.POPULATION)
        currentFeatures.electionDistrict.addTo(map);
      })
    });
  };

    // query the school district polygons for point containment
    featureLayers.schoolDistrict.query().contains(point).run((error, featureCollection) => {
      featureCollection.features.forEach(feature => {
        currentFeatures.schoolDistrict = L.geoJSON(feature, { style: setSchoolDistrictStyle });
        $('#schoolDistrict td:eq(1)').text(feature.properties.SHORTNAME)
        $('#schoolDistrict td:eq(2)').text(feature.properties.ADMIN)
        currentFeatures.schoolDistrict.addTo(map);
      })
    });

    // query the grade two feeder pattern polygons for point containment
    featureLayers.feederPatternTwo.query().contains(point).run((error, featureCollection) => {
      featureCollection.features.forEach(feature => {
        currentFeatures.feederPatternTwo = L.geoJSON(feature, { style: setSchoolDistrictStyle });
        $('#feederPatternTwo td:eq(1)').text(feature.properties.SCHOOL)
        $('#feederPatternTwo td:eq(2)').text(feature.properties.DISTRICT)
        currentFeatures.feederPatternTwo.addTo(map);
      })
    });
*/

/*
const propsValuesArr = Object.values(feature.properties);

          const props = document.createElement("ul");

          for (var i = 0; i < propsValuesArr.length; i++) {
            var listItem = document.createElement("li");
            listItem.innerText = propsValuesArr[i];
            props.appendChild(listItem);
          }
          */

          /*const repsData1 = document.getElementById("repsData1");
          const repsData2 = document.getElementById("repsData2");
          repsData1.innerText(feature.properties.name);
          repsData2.innerText(feature.propertis.party);
*/