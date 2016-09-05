var age = {};
var grade = {};
var catogery = {};
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>functon to change in array of object/////////////////////////////
function format(obj) {
  var array = [];
  for (agekey in obj)
  {
    array.push(obj[agekey]);
  }
  return array;
  }
////////////////////////////////////////////////combining all 3 files///////////////////////////

  var fileNames= ["csv/India2011.csv","csv/IndiaSC2011.csv","csv/IndiaST2011.csv"];
  fileReader(fileNames);
//////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////the main condition////////////////////////////
function arrayConversion(text)
{
  var header = [];
  text.split('\n').map(function(line , num)
  {
    if(line!=='')
    {
      var line=line.split(',');
      if(num!=0){
        //line[4]=line[4];
        ageKey=line[5];
        //console.log(data);
        if(line[4] == "Total" )
        {
          //all ages wise //
        if (line[5] != "All ages")
        {
                age[ageKey] = {};
                age[ageKey].ageGroup = ageKey;
                age[ageKey].totallit = line[12];

        }
          else
            {
              //For Second eduWise Population//
              var areaKey = line[3];
              var gradM = line[40];
              var gradF = line[41];

                grade[areaKey] = {area: areaKey, gradMales: gradM, gradFemales: gradF};

            }

              //For Third Education Category wise - all India data combined together
      for(index=15;index<44;index+=3)
      {

        var eduValue = header[index].split(",");

        var totalPopulation = line[index];
              if (eduValue in catogery)
                {
                    catogery[eduValue].totalPop = totalPopulation;
                }
              else
              {
                  catogery[eduValue] = {eduCateg: eduValue, totalPop:totalPopulation };

              }
      }
    }
  }
      else
      {
        header=line;

      }
    }
  }
);
}
function fileReader(fileNames){
  fileNames.map(function (fileName) {

    var fs=require('fs');
    var data=fs.readFileSync(fileName).toString();
    arrayConversion(data);
    console.log(data);
  });

  age=format(age);
  grade = format(grade);
  catogery = format(catogery);

}


  var fs=require('fs');
  fs.writeFile("JsonFile/ageWise.json",JSON.stringify(age),function(err){if(err) throw err; console.log("file saved1");})
  fs.writeFile("JsonFile/gradwise.json",JSON.stringify(grade),function(err){if(err) throw err; console.log("file saved2");})
  fs.writeFile("JsonFile/eduWise.json",JSON.stringify(catogery),function(err){if(err) throw err; console.log("file saved3");})
