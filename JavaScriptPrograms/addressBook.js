
var readline=require('readline-sync');
var fs = require('fs');




class AdressBook
{
    addPerson()
    {
        console.log("Enter First Name");
        var firstName=readline.question();

        console.log("Enter Last Name");
        var lastName=readline.question();

        console.log("Enter City name");
        var city=readline.question();

        console.log("Enter state name");
        var state=readline.question();

        console.log("Enter Zip code");
        var zipcode=readline.question();

        console.log("Enter Mobile Number");
        var mobileNumber=readline.question();


        addressData.push(
            {
                "FirstName":firstName,
                "LastName":lastName,
                "City":city,
                "State":state,
                "Zipcode":zipcode,
                "MobileNumber":mobileNumber
            }
        )
        

            this.saveFile(addressData);
            return [firstName,lastName,city,state,zipcode,mobileNumber]
   
    
    }
     //saving the updated data to json file
    saveFile(addressData)
    {
        fs.writeFileSync('address.json',JSON.stringify(addressData))
        console.log("Data saved sucessfully...")
    }

     //Display records of user
     displayRecord(addressData)
     {
         for(let i=0;i<addressData.length;i++)
         {
             console.log(addressData[i])
         }
     }

   



}