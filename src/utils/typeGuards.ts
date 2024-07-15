import { CountryInfoDb } from "@/db/modals/countryDb";
import {ObjectId} from "mongoose"




export function isCountryInfoDb(value: any): value is CountryInfoDb {
    return typeof value === 'object' &&
        value !== null &&
        typeof value.countrySymbol === 'string' &&
        typeof value.biden === 'number' &&
        typeof value.trump === 'number';
}


