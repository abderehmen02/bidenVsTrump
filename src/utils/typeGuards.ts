import {ObjectId} from "mongoose"
type  CountryInfoDb = {
    _id : ObjectId ,
    countrySymbol : string ,
    biden : number ,
    trump : number
}




export function isCountryInfoDb(value: any): value is CountryInfoDb {
    return typeof value === 'object' &&
        value !== null &&
        typeof value.countrySymbol === 'string' &&
        typeof value.biden === 'number' &&
        typeof value.trump === 'number';
}


