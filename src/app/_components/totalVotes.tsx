"use client"

import { useCountriesVotesStore } from "@/store/countriesDb"

export const TotalVotes = ()=>{
    const {countriesVotes} = useCountriesVotesStore()
    let totalVotes : number | undefined  ;
    for(let i = 0 ; i< countriesVotes.length ; i++){
        totalVotes = (totalVotes || 0) + (countriesVotes[i].biden + countriesVotes[i].trump)
    }
    return       <div id="totalVotes" className="flex flex-col items-center gap-1 mt-9" >
    <h4 className="H4 " style={{margin : 0}} >Total Votes</h4>
    {totalVotes ?   <h4 className="H4 " style={{margin : 0}}>{totalVotes}</h4>  : <div className="skeleton w-24 h-9" ></div>}
    </div>
}