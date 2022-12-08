

// mapboxgl.accessToken = 'pk.eyJ1IjoibWZlbm4yIiwiYSI6ImNsYWp1cGk0aTAzNnUzbnMwZ3o0bm4xNG8ifQ.-FWDnfl7FidedLkI7qIJiA';
// var map = new mapboxgl.Map({
//     container: 'map', // container ID
//     style: 'mapbox://styles/mfenn2/clajw6p60001j14qphmp5iz3n', // style URL
// });
// covid_element = document.getElementById("covidToggle").value();
// time_element = document.getElementById("time").value();
// day_element = document.getElementById("days").value();
// file_path = (covid_element.toString()) + "/" + (day_element.toString()) + ".txt.";


 const fs = require('fs');
 building = []

var array = fs.readFileSync('C:/Users/Admin/Documents/GitHub/4155-group1/non-covid/Fridaystripped.txt').toString().split("\n");
for(i in array) {
   var temp = array[i].substring(0,2);
   row_string = array[i].toString;
   time = "00"


   if(temp == time){
      console.log(array[i]);
      string_Length = array[i].length;
      bName = array[i].substring(3,7);
      bCount = array[i].substring(8, string_Length);
      //bCount = bCount.replace(/\D/g,'');
      bCount = parseFloat(bCount);
      bName = bName.toLowerCase();
      bName = bName.toString();
      building_entry = {
         building_name : bName,
         building_count : bCount
      };
      map.on('load', function() {

         if(building_entry.building_count() > 1000){
            map.setPaintProperty(building_entry.building_name(),'fill-color', '#0000FF');
         }
         else if(building_entry.building_count() > 800){
            map.setPaintProperty(building_entry.building_name(),'fill-color', '#0000FF');
         }
         else if(building_entry.building_count() > 600){
            map.setPaintProperty(building_entry.building_name(),'fill-color', '#0000FF');
         }
         else if (building_entry.building_count() > 400){
            map.setPaintProperty(building_entry.building_name(),'fill-color', '#0000FF');
         }
         else if (building_entry.building_count() > 200){
            map.setPaintProperty(building_entry.building_name(),'fill-color', '#0000FF');
         }
         else{
            map.setPaintProperty(building_entry.building_name(),'fill-color', '#0000FF');
         }
       });
      building.push(building_entry);    
   }  

  

}



for(i in building){
   testnum = building[i].building_count;
   console.log(building[i].building_count);
   console.log(building[i].building_name)
};


