var myObj =
[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "p"},

];

/*
var a=[];

  for (var i = 0; i < myObj.length; i++) {
    if (myObj[i].occupation=="Programmer") {
      console.log(myObj[i].name);
      console.log(myObj[i].age);
    }
    a.push(myObj[i].age);
  }
a.sort();
a.reverse();
console.log(a);

for (var i = 0; i < myObj.length; i++){
if(myObj[i].occupation=="Team Leader")
{

  n.push(newobj={ 'Team Leader' : [{'name':myObj[i].name, 'age':myObj[i].age}]});
  console.log(newobj);
}
  if(myObj[i].occupation=="Programmer"){

  a.push(newobj={ 'Programmer' : [{'name':myObj[i].name, 'age':myObj[i].age}]});
  console.log(newobj);
}
}

*/
var object={};
var array=[];
for(var i=0; i<myObj.length; i++)
{
 var store = myObj[i].occupation;
 if(!array[store])
 {
   object[store]=[];
   array[store] = [];
 }

 object[store].push({"name": myObj[i].name,"age": myObj[i].age});
}

console.log(object);
