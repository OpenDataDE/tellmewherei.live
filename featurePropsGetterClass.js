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

function featurePropsGetter (featureLayerName, point, elementID) {
    this.featureLayerName = featureLayerName;
    this.point = point;
    this.elementID = document.getElementById(elementID);
    this.getProperties = this.featureLayerName
         .query()
         .contains(point)
         .run((error, featureCollection) => {
             featureCollection.features.forEach(feature => {
               const propsArr = Object.entries(feature.properties);
               const props = document.createElement("ol");
               for (var i = 0; i < propsArr.length; i++) {
                 var listItem = document.createElement("li");
                 listItem.innerText = propsArr[i];
                 props.appendChild(listItem);
                 this.elementID.appendChild(props);
                }
               
              })
          });
  }

/*
const propsValuesArr = Object.values(feature.properties);
const props = document.createElement("ul");
for (var i = 0; i < propsArr.length; i++) {
var listItem = document.createElement("li");
listItem.innerText = propsValuesArr[i];
props.appendChild(listItem);
}
*/
