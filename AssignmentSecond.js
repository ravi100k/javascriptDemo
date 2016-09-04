var ageWiseLiterateDistribution = {};
var gradPopStateAndGradeWise = {};
var eduCategWise = {};
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
        line[4]=line[4];
        ageKey=line[5];
        //console.log(data);
        if(line[4] == "Total" )
        {
        if (line[5] != "All ages")
        {

          if(ageKey in ageWiseLiterateDistribution)
          {
            //ageWiseLiterateDistribution[ageKey].TotalLiteratePop = line[12];

          }
          else
              {
                ageWiseLiterateDistribution[ageKey] = {};
                ageWiseLiterateDistribution[ageKey].ageGroup = ageKey;
                ageWiseLiterateDistribution[ageKey].TotalLiteratePop = line[12];
              }
      }
          else
            {
              //For Second Statwise and gender wise Graduate Population
              var areaKey = line[3];
              var gradM = line[40];
              var gradF = line[41];

              if (areaKey in gradPopStateAndGradeWise)
              {
                gradPopStateAndGradeWise[areaKey].gradMales = gradM;
                gradPopStateAndGradeWise[areaKey].gradFemales = gradF;
              }
              else
              {
                gradPopStateAndGradeWise[areaKey] = {area: areaKey, gradMales: gradM, gradFemales: gradF};

              }

      }
              //For Third Education Category wise - all India data combined together
      for(eduCatIndex=15;eduCatIndex<44;eduCatIndex+=3)
      {

        var eduCatValue = header[eduCatIndex].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);

        var totalPopValue = line[eduCatIndex];
              if (eduCatValue in eduCategWise)
                {
                    eduCategWise[eduCatValue].totalPop = totalPopValue;
                }
              else
              {
                  eduCategWise[eduCatValue] = {eduCateg: eduCatValue, totalPop:totalPopValue };

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
    //console.log(data);
  });
  ageWiseLiterateDistribution=format(ageWiseLiterateDistribution);
  gradPopStateAndGradeWise = format(gradPopStateAndGradeWise);
  eduCategWise = format(eduCategWise);

}
function write()
{
  var fs=require('fs');
  fs.writeFile("JsonFile/ageWise.json",JSON.stringify(ageWiseLiterateDistribution),function(err){if(err) throw err; console.log("file saved1");})
  fs.writeFile("JsonFile/gradwise.json",JSON.stringify(gradPopStateAndGradeWise),function(err){if(err) throw err; console.log("file saved2");})
  fs.writeFile("JsonFile/eduWise.json",JSON.stringify(eduCategWise),function(err){if(err) throw err; console.log("file saved3");})


}
  write();
