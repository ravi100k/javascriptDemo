
var myObj = [5, [22], [[14]], [[4]],[5,6]]
var myNewArray = [].concat.apply([], myObj);
var myNewArray1=[].concat.apply([], myNewArray);
console.log(myNewArray1);
