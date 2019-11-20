
class Person
{
    constructor()
    {
        this.firstName="",
        this.lastName="",
        this.address="",
        this.mobileNumber=""
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
}

module.exports={Person}