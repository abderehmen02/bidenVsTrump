"use client"
import { useCountriesVotesStore } from "@/store/countriesDb"
import { useCountrySymbolStore } from "@/store/countrySymbol"
import { isCountryInfoDb } from "@/utils/typeGuards"
import axios from "axios"
import { useState } from "react"


export enum Candidates {
    trump = "trump" ,
    biden = "biden"
}


export const useVotes = ()=>{
const {countriesVotes ,setCountriesVotes  } = useCountriesVotesStore()
const {countrySymbol} = useCountrySymbolStore()
const [addingVote, setAddingVote] = useState(false)


const addTrumpVote = async ()=>{
if(addingVote)return
setAddingVote(true)
if(!countrySymbol) throw new Error("can not find the country symbol")
const response  = await    axios.post("/api/addVote" ,    { candidate : Candidates.trump ,
    countrySymbol })
const newCountryVotes = response.data
setCountriesVotes(countriesVotes.map(countryVotes=>countryVotes.countrySymbol === newCountryVotes.countrySymbol ? newCountryVotes : countryVotes ))
if(isCountryInfoDb(newCountryVotes)){
setCountriesVotes(countriesVotes.map(countryVotes=>countryVotes.countrySymbol === newCountryVotes.countrySymbol ? newCountryVotes : countryVotes ))
}
else throw new Error("can not get the new country votes from the api")
setAddingVote(false)
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






