// Initialize and add the map

mapboxgl.accessToken = 'pk.eyJ1IjoibWZlbm4yIiwiYSI6ImNsYWp1cGk0aTAzNnUzbnMwZ3o0bm4xNG8ifQ.-FWDnfl7FidedLkI7qIJiA';
var map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mfenn2/clajw6p60001j14qphmp5iz3n', // style URL
});
window.onload = function(){
      getText("https://raw.githubusercontent.com/Michael-Fenn/4155-group1/main/non-covid/MondayCleaned.txt")
    }
    //fetches file url
    async function getText(file) {
      let x = await fetch(file);
      let y = await x.text();
      let arr = y.split('\n');
      var table = document.getElementById("tableBody");
      //removes old table
      for(var j = table.rows.length; j > 0; j--){
        table.deleteRow(j-1);
      }
      document.getElementById("tableBody").innerHTML +=  "<tr><th>Building</th><th># of Connections</th></tr>";
      //creates new table data
      for (let i = 0; i < arr.length; i++){
        document.getElementById("tableBody").innerHTML +=  "<tr><td>" + arr[i] + "</td></tr>";
      }
    }
//checks drop down status and updates table based on selection, time/hour part isn't working yet
document.getElementById('day').onchange = function(){
  let day = document.getElementById('day').value;
  let hour = document.getElementById('hour').value;
  let covid = document.getElementById('covid').value;
  let url = "";
  if (covid == "non-covid"){
    if (day == "mon"){
      url = "https://raw.githubusercontent.com/Michael-Fenn/4155-group1/main/non-covid/MondayCleaned.txt";
    }
    else if (day == "tue"){
      url = "https://raw.githubusercontent.com/Michael-Fenn/4155-group1/main/non-covid/TuesdayCleaned.txt";
    }
    else if (day == "wed"){
      url = "https://raw.githubusercontent.com/Michael-Fenn/4155-group1/main/non-covid/WednesdayCleaned.txt";
    }
    else if (day == "thu"){
      url = "https://raw.githubusercontent.com/Michael-Fenn/4155-group1/main/non-covid/ThursdayCleaned.txt";
    }
    else if (day == "fri"){
      url = "https://raw.githubusercontent.com/Michael-Fenn/4155-group1/main/non-covid/FridayCleaned.txt";
    }
    else if (day == "sat"){
      url = "https://raw.githubusercontent.com/Michael-Fenn/4155-group1/main/non-covid/SaturdayCleaned.txt";
    }
    else if (day == "sun"){
      url = "https://raw.githubusercontent.com/Michael-Fenn/4155-group1/main/non-covid/SundayCleaned.txt";
    }
  }
  else{
    if (day == "mon"){
      url = "https://raw.githubusercontent.com/Michael-Fenn/4155-group1/main/covid/Monday.txt";
    }
    else if (day == "tue"){
      url = "https://raw.githubusercontent.com/Michael-Fenn/4155-group1/main/covid/Tuesday.txt";
    }
    else if (day == "wed"){
      url = "https://raw.githubusercontent.com/Michael-Fenn/4155-group1/main/covid/Wednesday.txt";
    }
    else if (day == "thu"){
      url = "https://raw.githubusercontent.com/Michael-Fenn/4155-group1/main/covid/Thursday.txt";
    }
    else if (day == "fri"){
      url = "https://raw.githubusercontent.com/Michael-Fenn/4155-group1/main/covid/Friday.txt";
    }
    else if (day == "sat"){
      url = "https://raw.githubusercontent.com/Michael-Fenn/4155-group1/main/covid/Saturday.txt";
    }
    else if (day == "sun"){
      url = "https://raw.githubusercontent.com/Michael-Fenn/4155-group1/main/covid/Sunday.txt";
    }
  }
  getText(url);
}
document.getElementById('hour').onchange = function(){
  let day = document.getElementById('day').value;
  let hour = document.getElementById('hour').value;
  let covid = document.getElementById('covid').value;
  let url = "";
  if (covid == "non-covid"){
    if (day == "mon"){
      url = "https://raw.githubusercontent.com/Michael-Fenn/4155-group1/main/non-covid/MondayCleaned.txt";
    }
    else if (day == "tue"){
      url = "https://raw.githubusercontent.com/Michael-Fenn/4155-group1/main/non-covid/TuesdayCleaned.txt";
    }
    else if (day == "wed"){
      url = "https://raw.githubusercontent.com/Michael-Fenn/4155-group1/main/non-covid/WednesdayCleaned.txt";
    }
    else if (day == "thu"){
      url = "https://raw.githubusercontent.com/Michael-Fenn/4155-group1/main/non-covid/ThursdayCleaned.txt";
    }
    else if (day == "fri"){
      url = "https://raw.githubusercontent.com/Michael-Fenn/4155-group1/main/non-covid/FridayCleaned.txt";
    }
    else if (day == "sat"){
      url = "https://raw.githubusercontent.com/Michael-Fenn/4155-group1/main/non-covid/SaturdayCleaned.txt";
    }
    else if (day == "sun"){
      url = "https://raw.githubusercontent.com/Michael-Fenn/4155-group1/main/non-covid/SundayCleaned.txt";
    }
  }
  else{
    if (day == "mon"){
      url = "https://raw.githubusercontent.com/Michael-Fenn/4155-group1/main/covid/Monday.txt";
    }
    else if (day == "tue"){
      url = "https://raw.githubusercontent.com/Michael-Fenn/4155-group1/main/covid/Tuesday.txt";
    }
    else if (day == "wed"){
      url = "https://raw.githubusercontent.com/Michael-Fenn/4155-group1/main/covid/Wednesday.txt";
    }
    else if (day == "thu"){
      url = "https://raw.githubusercontent.com/Michael-Fenn/4155-group1/main/covid/Thursday.txt";
    }
    else if (day == "fri"){
      url = "https://raw.githubusercontent.com/Michael-Fenn/4155-group1/main/covid/Friday.txt";
    }
    else if (day == "sat"){
      url = "https://raw.githubusercontent.com/Michael-Fenn/4155-group1/main/covid/Saturday.txt";
    }
    else if (day == "sun"){
      url = "https://raw.githubusercontent.com/Michael-Fenn/4155-group1/main/covid/Sunday.txt";
    }
  }
  getText(url);
}
document.getElementById('covid').onchange = function(){
  let day = document.getElementById('day').value;
  let hour = document.getElementById('hour').value;
  let covid = document.getElementById('covid').value;
  let url = "";
  if (covid == "non-covid"){
    if (day == "mon"){
      url = "https://raw.githubusercontent.com/Michael-Fenn/4155-group1/main/non-covid/MondayCleaned.txt";
    }
    else if (day == "tue"){
      url = "https://raw.githubusercontent.com/Michael-Fenn/4155-group1/main/non-covid/TuesdayCleaned.txt";
    }
    else if (day == "wed"){
      url = "https://raw.githubusercontent.com/Michael-Fenn/4155-group1/main/non-covid/WednesdayCleaned.txt";
    }
    else if (day == "thu"){
      url = "https://raw.githubusercontent.com/Michael-Fenn/4155-group1/main/non-covid/ThursdayCleaned.txt";
    }
    else if (day == "fri"){
      url = "https://raw.githubusercontent.com/Michael-Fenn/4155-group1/main/non-covid/FridayCleaned.txt";
    }
    else if (day == "sat"){
      url = "https://raw.githubusercontent.com/Michael-Fenn/4155-group1/main/non-covid/SaturdayCleaned.txt";
    }
    else if (day == "sun"){
      url = "https://raw.githubusercontent.com/Michael-Fenn/4155-group1/main/non-covid/SundayCleaned.txt";
    }
  }
  else{
    if (day == "mon"){
      url = "https://raw.githubusercontent.com/Michael-Fenn/4155-group1/main/covid/Monday.txt";
    }
    else if (day == "tue"){
      url = "https://raw.githubusercontent.com/Michael-Fenn/4155-group1/main/covid/Tuesday.txt";
    }
    else if (day == "wed"){
      url = "https://raw.githubusercontent.com/Michael-Fenn/4155-group1/main/covid/Wednesday.txt";
    }
    else if (day == "thu"){
      url = "https://raw.githubusercontent.com/Michael-Fenn/4155-group1/main/covid/Thursday.txt";
    }
    else if (day == "fri"){
      url = "https://raw.githubusercontent.com/Michael-Fenn/4155-group1/main/covid/Friday.txt";
    }
    else if (day == "sat"){
      url = "https://raw.githubusercontent.com/Michael-Fenn/4155-group1/main/covid/Saturday.txt";
    }
    else if (day == "sun"){
      url = "https://raw.githubusercontent.com/Michael-Fenn/4155-group1/main/covid/Sunday.txt";
    }
  }
  getText(url);
}
//placeholder values
var very_high = 1000;
var high = 800;
var medium = 600;
var low = 400;
var very_low = 200;
//current building names: "uncc"(union), chhs, cato, woodward, bioinformatics, prospector, portal, student-activity-center, 
// cameron, burson, fretwell, colvard, cone, atkins, urec. 
map.on('load', function() {
  map.setPaintProperty("Unio",'fill-color', '#0000FF');
  map.setPaintProperty("PORT", "fill-color", "#ff0000");
  map.setPaintProperty("Cato", "fill-color", "#F2E34C");
  map.setPaintProperty("Wood", "fill-color", "#FFB52E");

});





 