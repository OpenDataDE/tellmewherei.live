function featureDataGetter (featureLayerName, point, elementID, property1, property2, property3) {
    this.featureLayerName = featureLayerName;
    this.repsData = repsData;
    this.point = point;
    this.elementID = document.getElementById(elementID);
    this.property1 = property1;
    this.property2 = property2;
    this.property3 = property3;
    this.getProperties = this.featureLayerName
         .query()
         .contains(point)
         .run((error, featureCollection) => {
             featureCollection.features.forEach(feature => {
               const map = new Map(Object.entries(feature.properties));
               this.elementID.innerText = 
                map.get(this.property1)
                + " " + map.get(this.property2) 
                + " " + map.get(this.property3);
              
               console.log(map);
               console.log(map.get(this.property1));
               console.log(map.get(this.property2));
               
              })
          });
    
}