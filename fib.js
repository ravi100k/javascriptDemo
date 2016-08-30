(loop=function()
{
var a=0, b=1, n=3;
console.log(a);
console.log(b);
for(var i=2;i<=10;i++)
{
f=a+b;
a=b;
b=f;
console.log (f);
}
})();
