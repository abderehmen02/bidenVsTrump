import {  connectDbPromise } from "@/db/connect"
import { CountryModal } from "@/db/modals/countryDb"
import { addVoteValidator } from "@/utils/validators"
import { NextRequest } from "next/server"



export const POST =  async  (req  : NextRequest)=>{
try {
await connectDbPromise
const countriesVotes = await CountryModal().find()
const response = new Response(JSON.stringify(countriesVotes), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
      'Surrogate-Control': 'no-store'
    }
  });
  
  return response;}
catch(err){
    console.log(err)
}
}