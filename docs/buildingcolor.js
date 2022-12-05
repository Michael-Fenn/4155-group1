//const { time } = require('console');
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
      bCount = array[i].substring(7, string_Length)
      building_entry = {
         building_name : bName,
         building_count : bCount
      };
      building.push(building_entry);
      

    
   }
   
   
   
   
}
console.log(building[2].building_name);

for(i in building){
   console.log(building[i])
};


