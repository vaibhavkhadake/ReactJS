class Address
{
    constructor()
    {
        this.city="",
        this.state="",
        this.zipcode=""
    }

    setCityName(cityName)
    {
        this.cityName=cityName
    }
    getCityName()
    {
        return this.cityName
    }

    setStateName(stateName)
    {
        this.stateName=stateName
    }
    getStateName()
    {
        return this.stateName
    }

    setZipcode(zipcode)
    {
        this.zipcode=zipcode
    }
    getZipcode()
    {
        return this.zipcode
    }
}
module.exports={Address}