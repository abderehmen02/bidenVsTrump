"use client"
import { useCountriesVotesStore } from "@/store/countriesDb"
import { useCountrySymbolStore } from "@/store/countrySymbol"
import { useTimeoutStores } from "@/store/intervals"
import { isCountryInfoDb } from "@/utils/typeGuards"
import axios from "axios"
import { useEffect, useRef, useState } from "react"


export enum Candidates {
    trump = "trump" ,
    biden = "biden"
}


export const useVotes = ()=>{
const {countriesVotes ,setCountriesVotes  } = useCountriesVotesStore()
const {countrySymbol} = useCountrySymbolStore()

const {getCountriesTimeout , addingVote , setAddingVote , setGetCountriesTimeout, setUpdatingCountriesVotesInterval , updatingCountriesVotesInterval } = useTimeoutStores()
const addingVoteRef = useRef(addingVote)
const  addTrumpVoteTimeout = useRef<any>(null)
const addBidenVoteTimout = useRef<any>(null)

useEffect(()=>{
addingVoteRef.current = addingVote
} , [addingVote] )




const getCountriesVotes = async  ()=>{
    if(getCountriesTimeout) clearTimeout(getCountriesTimeout)
    const timeoutId =  setTimeout( async  ()=>{
         if(addingVoteRef.current) return 
        const response = await  axios.get(`/api/getCountriesVotes` )
        if(response.status === 200 && !addingVoteRef.current  ) {   setCountriesVotes(response.data) }
 }  , 900)
  if( timeoutId )setGetCountriesTimeout(timeoutId)
}





const addTrumpVote = async ()=>{
setAddingVote(true)
clearTimeout(addTrumpVoteTimeout.current)
if(!countrySymbol) throw new Error("can not find the country symbol")
setCountriesVotes(countriesVotes.map(countryVotes=>countryVotes.countrySymbol === countrySymbol ? ({ ...countryVotes , trump :  countryVotes.trump + 1  }) : countryVotes ))
await    axios.post("/api/addVote" ,    { candidate : Candidates.trump ,
    countrySymbol })
const addTrumpVoteTimoutId = setTimeout(()=>{console.log("setting to false" , addingVote ) ; setAddingVote(false)} , 2000 )
addTrumpVoteTimeout.current = addTrumpVoteTimoutId
}

const addBidenVote =async ()=>{
    setAddingVote(true)
    clearTimeout(addBidenVoteTimout.current)
    // if(fetchingCountriesTimout) clearTimeout(fetchingCountriesTimout)
    if(!countrySymbol) throw new Error("can not find the country symbol")
    setCountriesVotes(countriesVotes.map(countryVotes=>countryVotes.countrySymbol === countrySymbol ? ({ ...countryVotes , biden:  countryVotes.biden + 1  }) : countryVotes ))
     await    axios.post("/api/addVote" ,    { candidate : Candidates.biden ,
        countrySymbol })
    const addBidenVoteTimoutId = setTimeout(()=>{ setAddingVote(false)} , 2000 )
    addBidenVoteTimout.current = addBidenVoteTimoutId
    }
    
return {addTrumpVote  , getCountriesVotes ,  addingVote , addBidenVote}
}






