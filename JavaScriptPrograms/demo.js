
let input=require('readline-sync')
let fs=require('fs')
//Creating object of Person  class (personmethods.js)
let util=require('../Address Book/personmethods')

let obPerson=new util.Person()


class AddressBook
{
    //Add new person in the system
    addPerson(addressData)
    {
        let format = /^[a-zA-Z]+$/;
        let formatnum = /^\d{10,10}$/;
        
        try{
        console.log("Enter first name")
        let fname=input.question()

        if (format.test(fname) == false) throw "name should be in string format";

        console.log("Enter last name")
        let lname=input.question()
        if (format.test(lname) == false) throw "last name should be in string format";

        console.log("Enter address")
        let address=input.question()
       

        console.log("Enter city")
        let city=input.question()
        if (format.test(city) == false) throw "city name should be in string format";

        console.log("Enter state")
        let state=input.question()
        if (format.test(state) == false) throw "state  should be in string format";
        
        console.log("Enter zip")
        let zip=input.question()

        console.log("Enter phonenumber")
        let phonenumber=input.questionInt()
        if (formatnum.test(phonenumber) == false) throw "phone number not in proper format";

        //creating object and add it to the addressData 
        addressData.push (
            {
            "firstname" : fname,
            "lastname" :lname,
            "address" : address,
            "city" :city,
            "state":state,
            "zip":zip,
            "phonenumber":phonenumber
            })
            //  fs.writeFileSync('address.json',JSON.stringify(this.addressData))
         this.saveFile(addressData)
    
           return [fname,lname,address,city,state,zip,phonenumber]

        }catch(e)
        {
            return e
        }
        
    }
    //Editing person information
    editInfo(addressData)
    {
        let flagid=-1
        console.log("Enter user name")
        let userName=input.question()

        console.log("Enter phone number")
        let mobNo=input.questionInt()

        for(let i=0;i<addressData.length;i++)
        {
            if(addressData[i].firstname==userName && addressData[i].phonenumber==mobNo )
            {
                flagid=i
            }
        }
    
        if(flagid==-1)
        {
            console.log("person not found")
            return flagid
        }

        this.display(addressData,flagid)
        console.log("What do you want to edit:")
        console.log("\n1.First name"+"\n2.Last name"+"\n3.Address"+"\n4.Phone number")
        console.log("Enter your choice")
        let choice=input.questionInt()
        switch(choice)
        {
            case 1:
                addressData[flagid].firstname=this.firstNameInput()
                break;


            case 2:
                addressData[flagid].lastname=this.lastNameInput()
                break;

            case 3:
                addressData[flagid].address=this.addressInput()
                break;
            
            case 4:
                addressData[flagid].phonenumber=this.phonenumberInput()
                break;
            
            default:
                console.log("Invalid Input")
        
        }
        this.saveFile(addressData)

        
        
    }

    //displaying person information based on the flagid
    display(addressData,flagid)
    {
        console.log("first name: "+addressData[flagid].firstname)
        console.log("last name: "+addressData[flagid].lastname)
        console.log("address: "+addressData[flagid].address)
        console.log("phonenumber: "+addressData[flagid].phonenumber)
    }

    //tacking name which want to update
    firstNameInput()
    {
        let updatedName, uname
        console.log("Enter name to update")
        uname=input.question()
        obPerson.setName(uname)
        updatedName=obPerson.getName()
        return updatedName
    }
    //tacking last name which want to update
    lastNameInput()
    {
        let updatedLastName
        console.log("Enter your last name to upadate")
        let uLastName=input.question()
        obPerson.setLastName(uLastName)
        updatedLastName=obPerson.getLastName()
        return updatedLastName

    }

    //tacking address which want to update
    addressInput()
    {
        let  updatedAddress
        console.log("Enter address to update..")
        let uAddress=input.question()
        obPerson.setAddress(uAddress)
        updatedAddress=obPerson.getAddress()
        return updatedAddress
    }
    //tacking mobile no to update
    phonenumberInput()
    {
        let  updatedPhoneNumber
        console.log("Enter mobile number to update")
        let uPhoneNumber=input.question()
        obPerson.setPhoneNumber( uPhoneNumber)
        updatedPhoneNumber=obPerson.getPhoneNumber()
        return updatedPhoneNumber
    }

    //saving the updated data to json file
    saveFile(addressData)
    {
        fs.writeFileSync('address.json',JSON.stringify(addressData))
        console.log("Data saved sucessfully...")
    }
    //Deleting respective record
    deletePerson(addressData)
    {
        let i
        console.log("Enter your name:")
        let userName=input.question()
        console.log("Enter phone number:")
        let mobNo=input.questionInt()
        let flagid=-1
        for(i=0;i<addressData.length;i++)
        {
            if(addressData[i].firstname==userName && mobNo==addressData[i].phonenumber)
            {
                flagid=i
            }
        }

        if(flagid==-1)
        {
            console.log("Record is not found which you want to delete")
            return flagid
        }
        //calling display method to display record
        this.display(addressData,flagid)
       //asking user to sure to delete user record
       console.log("Are you sure to delete record")
       console.log("1.Yes"+"\n2.No")
       console.log("Enter your chocice")
       let choice=input.questionInt()

       switch(choice)
       {
           case 1:
               addressData.splice(flagid,1)
               break;
            case 2:
                console.log("Record not deleted")
                break;
            default:
                console.log("You have entered wrong choice..")
                
       }
       this.saveFile(addressData)

    }
    //method for sorting data by last name
    sortByLastName(addressData)
    {
        let i,j,temp
        for(i=0;i<addressData.length;i++)
        {
            for(j=0;j<addressData.length-1;j++)
            {
                if(addressData[j+1].lastname < addressData[j].lastname)
                {
                    temp=addressData[j+1]
                    addressData[j+1]=addressData[j]
                    addressData[j]=temp
                }
            }
        }
        for(i=0;i<addressData.length;i++)
        {
            console.log(addressData[i])
        }
    }
    //Sorting data by zipcode
    sortByZipCode(addressData)
    {
        let i,j,temp
        console.log("your sorted zip codes are..")
        for(i=0;i<addressData.length;i++)
        {
            for(j=0;j<addressData.length-1;j++)
            {
                if(addressData[j+1].zip < addressData[j].zip)
                {
                    temp=addressData[j+1]
                    addressData[j+1]=addressData[j]
                    addressData[j]=temp
                }
            }
        }
        for(i=0;i<addressData.length;i++)
        {
            console.log(addressData[i].zip)
        }
    }

    //Display records 
    displayRecord(addressData)
    {
        for(let i=0;i<addressData.length;i++)
        {
            console.log(addressData[i])
        }
    }

}
module.exports={AddressBook}


let input=require('readline-sync')
let fs=require('fs')
//creating object of AddressBook class
let addressBook=require('../Address Book/AddressBook')
let bookMethod=new addressBook.AddressBook()
console.log("main1")
//creating object of json
let address=fs.readFileSync("/home/administrator/Desktop/Bridgelab/OOPs concept/Address Book/address.json")
console.log("main")
let addressData  =JSON.parse(address)   //storing json file to variable addressData

function manager()
{
    let returnName
    let fname,lname,address,city,state,zip,phonenumber
let choice=0
    do
    {
        console.log("*****Address Book******")
        console.log("\n1.Add person data"+"\n2.Edit person data"+"\n3.delete person data"+""+"\n4.Sort by last name"+"\n5.Sort by Zip code"+"\n6.Display all records"+"\n7.Save File")
        console.log("Enter your choice")
         choice=input.questionInt()

        switch(choice)
        {
            case 1:
                returnName= bookMethod.addPerson(addressData)   //passing json file
                
               fname=returnName[0]
               lname=returnName[1]
               address=returnName[2]
               city=returnName[3]
               state=returnName[4]
               zip=returnName[5]
               phonenumber=returnName[6]
               
                console.log("Add person sucessfully..")
                break;
            
            case 2:
                let responce=bookMethod.editInfo(addressData)
                if(responce==-1)
                    console.log("person data is not found")
                else
                    console.log("person data is suceesfully updated")
                break;

            case 3:
               let deleteResponce=bookMethod.deletePerson(addressData)
               if(deleteResponce !=-1)
               {
                    console.log("Your data deleted sucessfully")
               }
                break;
            
            case 4:
                bookMethod.sortByLastName(addressData)
                break;

            case 5:
                bookMethod.sortByZipCode(addressData)
                break;
            
            case 6:
                bookMethod.displayRecord(addressData)
                break;
            case 7:
                bookMethod.saveFile()
                break;

            default:
                console.log("Sorry....Please enter valid input")
        }

    }while(choice>1)
    console.log(fname)
    console.log(lname)
    return[returnName,fname,lname,address,city,state,zip,phonenumber]
}
module.exports=manager()














































/*
let input=require('readline-sync')
let fs=require('fs')
//creating object of AddressBook class
let addressBook=require('../Address Book/AddressBook')
let bookMethod=new addressBook.AddressBook()

//creating object of json
let address=fs.readFileSync('address.json')
let addressData  =JSON.parse(address)   //storing json file to variable addressData
function manager()
{
let choice
    do
    {
        console.log("*****Address Book******")
        console.log("\n1.Add person data"+"\n2.Edit person data"+"\n3.delete person data"+""+"\n4.Sort by last name"+"\n5.Sort by Zip code"+"\n6.Display all records"+"\n7.Save File")
        console.log("Enter your choice")
         choice=input.questionInt()

        switch(choice)
        {
            case 1:
                    console.log("Enter first name")
                    var fname = input.question()
                    addressData.addPerson(addressData)   //passing json file
                console.log("Add person sucessfully..")
                break;
            
            case 2:
                let responce=bookMethod.editInfo(addressData)
                if(responce==-1)
                    console.log("person data is not found")
                else
                    console.log("person data is suceesfully updated")
                break;

            case 3:
               let deleteResponce=bookMethod.deletePerson(addressData)
               if(deleteResponce !=-1)
               {
                    console.log("Your data deleted sucessfully")
               }
                break;
            
            case 4:
                bookMethod.sortByLastName(addressData)
                break;

            case 5:
                bookMethod.sortByZipCode(addressData)
                break;
            
            case 6:
                bookMethod.displayRecord(addressData)
                break;
            case 7:
                bookMethod.saveFile()
                break;

            default:
                console.log("Sorry....Please enter valid input")
        }

    }while(choice==1)
    return [fname]
}
module.exports=manager()
*/






























































































