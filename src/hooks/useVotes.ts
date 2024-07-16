import { useCountriesVotesStore } from "@/store/countriesDb"
import { useCountrySymbolStore } from "@/store/countrySymbol"
import { isCountryInfoDb } from "@/utils/typeGuards"
import axios from "axios"


export enum Candidates {
    trump = "trump" ,
    biden = "biden"
}


export const useVotes = ()=>{
const {countriesVotes ,setCountriesVotes  } = useCountriesVotesStore()
const {countrySymbol} = useCountrySymbolStore()
const addTrumpVote = async ()=>{
if(!countrySymbol) throw new Error("can not find the country symbol")
const response  = await    axios.post("/api/addVote" ,    { candidate : Candidates.trump ,
    countrySymbol })
const newCountryVotes = response.data
console.log("new country votes" , newCountryVotes)
if(isCountryInfoDb(newCountryVotes)){
setCountriesVotes(countriesVotes.map(countryVotes=>countryVotes.countrySymbol === newCountryVotes.countrySymbol ? newCountryVotes : countryVotes ))
}
else throw new Error("can not get the new country votes from the api")
}

const addBidenVote =async ()=>{
    if(!countrySymbol) throw new Error("can not find the country symbol")

    const response  = await    axios.post("/api/addVote" ,    { candidate : Candidates.biden ,
        countrySymbol })
    const newCountryVotes = response.data
    if(isCountryInfoDb(newCountryVotes)){
    setCountriesVotes(countriesVotes.map(countryVotes=>countryVotes.countrySymbol === newCountryVotes.countrySymbol ? newCountryVotes : countryVotes ))
    }
    else throw new Error("can not get the new country votes from the api")
    }
    
return {addTrumpVote , addBidenVote}
}






