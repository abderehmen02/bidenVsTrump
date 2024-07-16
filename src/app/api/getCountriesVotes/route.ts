import {  connectDbPromise } from "@/db/connect"
import { CountryModal } from "@/db/modals/countryDb"
import { addVoteValidator } from "@/utils/validators"
import { NextRequest } from "next/server"



export const GET =  async  (req  : NextRequest)=>{
try {
await connectDbPromise
const countriesVotes = await CountryModal().find()
return new Response(JSON.stringify(countriesVotes) , {status : 200})
}
catch(err){
    console.log(err)
}
}