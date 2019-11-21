displayAnagram(primeArray)
{
    let notAnagram=[]
    let anagramArray=[]
    let i,j  
for(i=0;i<primeArray.length;i++)
{
    let strFirst="",strSplit1=[]

    strFirst=strFirst+primeArray[i]
    strSplit1=strFirst.split("")
    strSplit1.sort()
    strFirst=strSplit1.toString("");
   
    for(j=i+1;j<primeArray.length;j++)
    {
        isNotfind=true;
       let strSecond="",strSplit2=[];
        strSecond=strSecond+primeArray[j]
        strSplit2=strSecond.split("");
        strSplit2.sort()
        strSecond=strSplit2.toString("");
       
       
        if(strFirst==strSecond)
        {  
            anagramArray.push(primeArray[i])
            anagramArray.push(primeArray[j]) 
            isNotfind=false;
            break;
            
        }
    }
    if(isNotfind)
    {
        notAnagram.push(primeArray[i])
    }
    
}
    return [anagramArray,notAnagram]
}