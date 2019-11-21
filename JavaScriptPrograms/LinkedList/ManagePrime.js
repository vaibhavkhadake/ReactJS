
let readline=require('readline-sync')

let utilLinked=require('./LinkedList');
let objLinked=new utilLinked.LinkedList()

let utilPrime=require('./PrimeNumber')
let objPrime=new utilPrime.PrimeNumber()

function managePrime()
{
    let start=1,end=1000;
    let anagramStack=[];
    let primeArray=objPrime.displayPrime(start,end);

    let anagram=objPrime.displayAnagram(primeArray)
    console.log(anagram);
    
    for(let i=0;i<anagram[0].length;i++)
    {
        objLinked.addElementAtLast(anagram[0][i])
    }
    let j=0;
    while(!objLinked.isEmpty())
    {   
        anagramStack[j]=objLinked.deleteAtEnd()
        j++
    }
    console.log(anagramStack);

}
module.exports=managePrime()