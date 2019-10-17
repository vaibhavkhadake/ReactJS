function leapyear()
{
    // var readline = require('readline-sync');
    // var year=readline.questionInt("Enter yearnode  : ");
    var year=parseInt(document.getElementById("year2").value);
    var print=document.getElementById("print")
    if(year%400==0)
    {
        console.log("Leap Year");
        print.innerHTML="leap Year"
    }
    else if(year%100==0)
    {
        console.log("Not a Leap Year");  
        print.innerHTML="Not a leap Year"
    }
    else if(year%4==0)
    {
        console.log("Leap Year"); 
        print.innerHTML="leap Year" 
    }
    else
    {
        console.log("Not a Leap Year");
        print.innerHTML="Not a leap Year"
    }
}
leapyear();
