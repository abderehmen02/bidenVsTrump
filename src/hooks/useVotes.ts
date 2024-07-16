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
const [fetchingCountriesTimout, setFetchingCountriesTimout] = useState("")


const getCountriesVotes = async  ()=>{
    const response = await  axios.get("/api/getCountriesVotes")
    if(response.status === 200)    setCountriesVotes(response.data)
}


const addTrumpVote = async ()=>{
setAddingVote(true)
if(fetchingCountriesTimout) clearTimeout(fetchingCountriesTimout)
if(!countrySymbol) throw new Error("can not find the country symbol")

setCountriesVotes(countriesVotes.map(countryVotes=>countryVotes.countrySymbol === countrySymbol ? ({ ...countryVotes , trump :  countryVotes.trump + 1  }) : countryVotes ))


await    axios.post("/api/addVote" ,    { candidate : Candidates.trump ,
    countrySymbol })
// const newCountryVotes = response.data
// setCountriesVotes(countriesVotes.map(countryVotes=>countryVotes.countrySymbol === newCountryVotes.countrySymbol ? newCountryVotes : countryVotes ))
// if(isCountryInfoDb(newCountryVotes)){
// setCountriesVotes(countriesVotes.map(countryVotes=>countryVotes.countrySymbol === newCountryVotes.countrySymbol ? newCountryVotes : countryVotes ))
// }
// else throw new Error("can not get the new country votes from the api")
const timeoutId = setTimeout( getCountriesVotes , 1000)
typeof timeoutId === "string" &&  setFetchingCountriesTimout(timeoutId)
setAddingVote(false)
}

const addBidenVote =async ()=>{
    setAddingVote(true)
    if(fetchingCountriesTimout) clearTimeout(fetchingCountriesTimout)
    if(!countrySymbol) throw new Error("can not find the country symbol")
    setCountriesVotes(countriesVotes.map(countryVotes=>countryVotes.countrySymbol === countrySymbol ? ({ ...countryVotes , biden:  countryVotes.biden + 1  }) : countryVotes ))
    const response  = await    axios.post("/api/addVote" ,    { candidate : Candidates.biden ,
        countrySymbol })
    const timeoutId = setTimeout( getCountriesVotes , 1000)
    typeof timeoutId === "string" &&  setFetchingCountriesTimout(timeoutId)
    
    // if(isCountryInfoDb(newCountryVotes)){
    // setCountriesVotes(countriesVotes.map(countryVotes=>countryVotes.countrySymbol === newCountryVotes.countrySymbol ? newCountryVotes : countryVotes ))
    // }
    // else throw new Error("can not get the new country votes from the api")
    setAddingVote(false)
    }
    
return {addTrumpVote , addBidenVote}
}






