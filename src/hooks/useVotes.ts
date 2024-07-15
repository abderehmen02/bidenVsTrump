import { Candidates } from "@/app/api/addVote/route"
import { countriesVotesStore } from "@/store/countriesDb"
import { isCountryInfoDb } from "@/utils/typeGuards"
import axios from "axios"



export const useVotes = (countrySymbol : string )=>{
const {countriesVotes ,setCountriesVotes  } = countriesVotesStore()

const addTrumpVote = async ()=>{
const response  = await    axios.post("/api/addVote" ,    { candidate : Candidates.trump ,
    countrySymbol })
const newCountryVotes = response.data
if(isCountryInfoDb(newCountryVotes)){
setCountriesVotes(countriesVotes.map(countryVotes=>countryVotes.countrySymbol === newCountryVotes.countrySymbol ? newCountryVotes : countryVotes ))
}
else throw new Error("can not get the new country votes from the api")
}

const addBidenVote = async ()=>{
    const response  = await    axios.post("/api/addVote" ,    { candidate : Candidates.biden ,
        countrySymbol })
    const newCountryVotes = response.data
    if(isCountryInfoDb(newCountryVotes)){
    setCountriesVotes(countriesVotes.map(countryVotes=>countryVotes.countrySymbol === newCountryVotes.countrySymbol ? newCountryVotes : countryVotes ))
    }
    else throw new Error("can not get the new country votes from the api")
    }
    

}






