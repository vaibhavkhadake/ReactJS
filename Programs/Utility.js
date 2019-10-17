module.exports= {

    fact(number)
    {
    //   var readline=require('readline-sync');
    //   var number=readline.questionInt("Enter number ");
    var flag=0;
    var mid=number/2;
    for(var i=2;i<=mid;i++)
    {
        if(number%i==0)
        {
            console.log("Not a prime number");
            flag=1;
            break;
        }
    }
    if(flag==0)
    {
        console.log("Prime Number");
    }
    },
    harmonic(number)
    {
        var harmonicNumber=1;
		for(var i=2;i<=number;i++)
		{
            harmonicNumber=harmonicNumber+(1/i);
           	
        }
        console.log("Harmonic is : "+harmonicNumber);
    }
    
}