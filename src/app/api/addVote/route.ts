import { CountryModal } from "@/db/modals/countryDb"
import { asyncWrapperApi } from "@/utils/asyncWrapers"
import { addVoteValidator } from "@/utils/validators"
import { NextApiRequest } from "next"

export enum Candidates {
    trump = "trump" ,
    biden = "biden"
}

export const POST =  asyncWrapperApi(async (req)=>{
const body = await req.json()
const data = addVoteValidator.parse(body)
const newCountry = await CountryModal().findOneAndUpdate({countrySymbol : data.countrySymbol} , { $inc: { [data.candidate]: 1 } } , {new : true} )
return new Response(JSON.stringify(newCountry) , {status : 201})
})