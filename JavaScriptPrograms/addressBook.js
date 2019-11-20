let readline = require('readline-sync');
let fs = require('fs');

let util = require('./person')
let obPerson = new util.Person()

class AddressBook 
{
    addPerson(addressData) {
        console.log("Enter First Name");
        let firstName = readline.question();

        console.log("Enter Last Name");
        let lastName = readline.question();

        console.log("Enter Address");
        let address = readline.question();

        console.log("Enter City name");
        let city = readline.question();

        console.log("Enter state name");
        let state = readline.question();

        console.log("Enter Zip code");
        let zipcode = readline.questionInt();

        console.log("Enter Mobile Number");
        let mobileNumber = readline.questionInt();


        addressData.push(
            {
                "FirstName": firstName,
                "LastName": lastName,
                "Address": address,
                "City": city,
                "State": state,
                "Zipcode": zipcode,
                "MobileNumber": mobileNumber
            }
        )
        this.saveFile(addressData);
        return [firstName, lastName, address, city, state, zipcode, mobileNumber]
    }


    // Edit person
    editInfo(addressData) {
        let flagid = -1
        console.log("Enter user first name ")
        let userName = readline.question()

        console.log("Enter mobile number")
        let mobileNumber = readline.questionInt()

        for (let i = 0; i < addressData.length; i++) {
            // console.log("(addressData[i].firstName ",addressData[i].FirstName);
            if (addressData[i].FirstName == userName && addressData[i].MobileNumber == mobileNumber)
            {
                flagid = i
            }
        }

        if (flagid == -1) {
            console.log("person not found")
            return flagid
        }

        this.display(addressData, flagid)

        console.log("What do you want to edit:");
        console.log("\n1.First name" + "\n2.Last name" + "\n3.Address" + "\n4.Mobile number");
        console.log("Enter your choice");

        let choice = readline.questionInt()
        switch (choice) {
            case 1:
                addressData[flagid].FirstName = this.firstNameInput()
                break;
            case 2:
                addressData[flagid].LastName = this.lastNameInput()
                break;
            case 3:
                addressData[flagid].Address = this.addressInput()
                break;
            case 4:
                addressData[flagid].MobileNumber = this.mobileNumberInput()
                break;
            default:
                console.log("Invalid Input")
        }
        this.saveFile(addressData)
    }


    // Display All persons

    display(addressData, flagid) {
        console.log("first name: " + addressData[flagid].FirstName)
        console.log("last name: " + addressData[flagid].LastName)
        console.log("address: " + addressData[flagid].Address)
        console.log("Mobile Number: " + addressData[flagid].MobileNumber)
    }

    //methods for update details

    firstNameInput() {
        let updatedFirstName, uname
        console.log("Enter name to update")
        uname = readline.question()
        obPerson.setFirstName(uname)
        updatedFirstName = obPerson.getFirstName()
        return updatedFirstName
    }

    lastNameInput() {
        let updatedLastName
        console.log("Enter your last name to upadate")
        let uLastName = readline.question()
        obPerson.setLastName(uLastName)
        updatedLastName = obPerson.getLastName()
        return updatedLastName
    }


    addressInput() {
        let updatedAddress
        console.log("Enter address to update..")
        let uAddress = readline.question()
        obPerson.setAddress(uAddress)
        updatedAddress = obPerson.getAddress()
        return updatedAddress
    }

    mobileNumberInput() {
        let updatedMobileNumber
        console.log("Enter mobile number to update")
        let uMobileNumber = readline.question()
        obPerson.setMobileNumber(uMobileNumber)
        updatedMobileNumber = obPerson.getMobileNumber()
        return updatedMobileNumber
    }


    deletePerson(addressData) {
        console.log("Enter your first name:")
        let userName = readline.question()
        console.log("Enter mobile number:")
        let mobileNumber = readline.questionInt()
        let flagid = -1;
        console.log("Array length", addressData.length)

        for (let i = 0; i < addressData.length; i++) {
            if (addressData[i].FirstName == userName && mobileNumber == addressData[i].MobileNumber) {
                flagid = i
            }
        }

        if (flagid == -1) {
            console.log("Record is not found which you want to delete")
            return flagid
        }
        //calling display method to display record
        this.display(addressData, flagid)

        console.log("Are you sure to delete record")
        console.log("1.Yes" + "\n2.No")

        console.log("Enter your chocice")
        let choice = readline.questionInt()

        switch (choice) {
            case 1:
                addressData.splice(flagid, 1)
                break;
            case 2:
                console.log("Record not deleted")
                break;
            default:
                console.log("You have entered wrong choice..")
        }
        this.saveFile(addressData)
    }


    sortByZipCode(addressData) {
        let i, j, temp
        console.log("your sorted zip codes are..")

        for (i = 0; i < addressData.length; i++) {
            for (j = 0; j < addressData.length - 1; j++) {
                if (addressData[j + 1].Zipcode < addressData[j].Zipcode) {
                    temp = addressData[j + 1]
                    addressData[j + 1] = addressData[j]
                    addressData[j] = temp
                }
            }
        }

        for (i = 0; i < addressData.length; i++) {
            console.log(addressData[i].Zipcode)
        }
    }

    displayRecord(addressData) {
        for (let i = 0; i < addressData.length; i++) {
            console.log(addressData[i])
        }
    }
    saveFile(addressData) 
    {
        fs.writeFileSync('address.json', JSON.stringify(addressData))
        console.log("Data saved sucessfully...")
    }
}

module.exports = {
    AddressBook
}