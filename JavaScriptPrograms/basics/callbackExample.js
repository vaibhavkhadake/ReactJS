
function functionOne(a)
{
    console.log("function One",a);  
}

function functionTwo(var1,callback)
{
     console.log("function Two");
      callback(var1);  
}

functionTwo("vaibhav",functionOne)

module.export=functionTwo();