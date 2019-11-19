var readline=require('readline-sync');
var fs = require('fs');

var addressBook=require('./addressBook');
var bookMethod=new addressBook.AddressBook();

var address=fs.readFileSync("/home/user/Vaibhav/JavaScriptPrograms/address.json");
var addressData  =JSON.parse(address)

    function manager()
    {
        let choice=0;
        do
        {
            console.log(" ------------------Address Book----------------- ");
            console.log("Press ");
            console.log("1.Add Person \n2.Edit details \n3.Delete \n4.Sort By Zip Code \n5.Display \n6.Exit");
            console.log("Enter your choice ");
            choice=readline.questionInt();

            switch(choice)
            {
                case 1:

                  let  details=bookMethod.addPerson(addressData)
                    console.log("Adding person details");
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
                             console.log("Your data deleted sucessfully")
                    break;
                case 4:
                        bookMethod.sortByZipCode(addressData)
                    break;
                case 5:
                        bookMethod.displayRecord(addressData)
                    break;
                case 6:
                      console.log("Thank you");
                    break;
        
                default:
                    console.log("Sorry....Please enter valid input")
            }

        }while(choice!=6)

    }

    module.exports=manager()
