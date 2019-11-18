var readline=require('readline-sync');
var fs = require('fs');
var addressBook=require('./addressBook');
var bookMethod=new addressBook.AddressBook();
var address=fs.readFileSync("/home/user/Vaibhav/JavaScriptPrograms/address.json");
var addressData  =JSON.parse(address)


class addressBookManager
{

    function manager()
    {
        let choice=0;
        var details;
        do{
            console.log(" Address Book ");
            console.log("Press ");
            console.log("1.Add Person 2.Edit 3.delete 4.Sort 5.Display ");
            console.log(" Enter your choice ");
            choice=readline.questionInt();

            switch(choice)
            {
                case 1:
                    details=bookMethod.addPerson(addressData)

                    break;
                case 2:

                    break;
                case 3:

                    break;
                case 4:

                    break;
                case 5:

                    break;
                default:
                    console.log("Sorry....Please enter valid input")
            }

        }while(choice>1)
    }
}