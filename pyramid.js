pyramid=function()
{
  var rows,space,pattern,str="";
  var no=5;
  for(rows=0;rows<=no;rows++)
  {
    k=rows;
    for(space=0;space<=no;space++)
    {
      str=str+" ";

    }no--;
    while (k+1>0) {
      str=str+"* ";
      k--;
    }
    console.log(str);
    str="";
      console.log("\n");
  }

}
();
