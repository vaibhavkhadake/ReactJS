
let util=require('./address.js')
class Person 
{
    constructor()
    {
        this.firstName="",
        this.lastName="",
        this.address="",
        this.mobileNumber="",
        this.addressDetails=new util.Address()
    }

    setFirstName(firstName)
    {
        this.firstName=firstName
    }
    getFirstName()
    {
        return this.firstName
    }

    setLastName(lastName)
    {
        this.lastName=lastName
    }
    getLastName()
    {
        return this.lastName
    }

    setAddress(address)
    {
        this.address=address
    }
    getAddress()
    {
        return this.address
    }

    setMobileNumber(mobileNumber)
    {
        this.mobileNumber=mobileNumber
    }
    getMobileNumber()
    {
        return this.mobileNumber
    }
    // setDetails()
    // {
    //     this.addressDetails.setCityName();
    //     this.addressDetails.setStateName();
    //     this.addressDetails.setZipcode();
    // }
    getDetails()
    {
        this.addressDetails.getCityName();
        this.addressDetails.getStateName();
        this.addressDetails.getZipcode();
    }
}

module.exports={Person}