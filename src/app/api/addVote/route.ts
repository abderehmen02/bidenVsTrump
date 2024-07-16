import {  connectDbPromise } from "@/db/connect"
import { CountryModal } from "@/db/modals/countryDb"
import { addVoteValidator } from "@/utils/validators"
import { NextRequest } from "next/server"



export const POST =  async  (req  : NextRequest)=>{
const body = await req.json()
const data = await  addVoteValidator.parse(body)
await connectDbPromise
const currCountry = await CountryModal().findOne({countrySymbol : data.countrySymbol})
let newCountry
if(currCountry) newCountry = await CountryModal().findOneAndUpdate({countrySymbol : data.countrySymbol} , { $inc: { [data.candidate]: 1 } } , {new : true} )
else newCountry = await CountryModal().create({countrySymbol : data.countrySymbol ,
    biden : 1 }  )
console.log("new country" , newCountry)
return new Response(JSON.stringify(newCountry) , {status : 201})
}