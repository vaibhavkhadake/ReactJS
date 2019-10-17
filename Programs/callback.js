function abc()
{
    console.log("Default Function");
}
abc();

function abc2(a,b)
{
var result= a*b
console.log("Parametarised function multiplication of a ,b " + result);
}
abc2(5,2);

var aa= function()
    {
        console.log("annonyms function ");
    }

console.log("annonyms function 2 "+aa());

var arrow=(a,b)=>{  console.log("arrow function using addition "+(a+b) ) }
arrow(5,6);

var arrow2= a=>{  console.log("arrow function one variable "+a ) }
arrow2(2);


async function demo()
{
console.log("Callback demo");
}
demo().then(console.log("In then method \n"));




function scaryClown() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('program terminated');
      }, 5000);
    });
  }
  
  async function msg() {
    const msg = await scaryClown();
    console.log('Message:', msg);
  }
  
  msg(); 

  function show(a)
  {
      console.log("Show function " + a);
  }

  function display(a,callback)
  {
      //var a=101;
      callback(a);

  }

  display(10,show);
  setTimeout(function show2()
  {
      console.log("show 2 ");
  },5000);

  console.log("end statement....");


