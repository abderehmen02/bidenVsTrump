"use client"

import { useCountriesVotesStore } from "@/store/countriesDb"

export const TotalVotes = ()=>{
    const {countriesVotes} = useCountriesVotesStore()
    let totalVotes  = 0 ;
    for(let i = 0 ; i< countriesVotes.length ; i++){
        totalVotes += (countriesVotes[i].biden + countriesVotes[i].trump)
    }
    return       <div id="totalVotes" className="flex flex-col gap-1 mt-9" >
    <h4 className="H4 " style={{margin : 0}} >Total Votes</h4>
    <h4 className="H4 " style={{margin : 0}}>{totalVotes}</h4>
    </div>
}