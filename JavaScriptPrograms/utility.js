module.exports= {

flipCoin(coin)
{
    var head=0,tail=0;
    for(var i=0;i<coin;i++)
    {
        if(Math.random()>0.5)
        {
            head++;
        }
        else
        {
            tail++;
        }    
    }
    console.log(" Head " ,head)
    console.log(" Tail " ,tail);
}
}