function addition()
{
var a=10;
var b=20;
return a+b;
}
console.log("Addition of two numbers : "+addition());




function main()
{

    var coin=10;
    var head=0,tail=0;
    for(var i=1;i<=coin;i++)
    {
        if(Math.random()<0.5)
        {
            head++;
        }
        else
        {
            tail++;
        }
    }
    console.log("times heads occures : "+head);
    console.log("times tails occures : "+tail);
}
main();
