"use client"
import { useCountriesVotesStore } from "@/store/countriesDb"

export const TrumpVotes = ()=>{
    const {countriesVotes} = useCountriesVotesStore()
    let totalTrumVotes : number | undefined ;


     for(let i = 0 ; i < countriesVotes.length ; i++){
        totalTrumVotes = (totalTrumVotes || 0 ) +  countriesVotes[i].trump
     }



    return       <div className="flex flex-col gap-7 items-center" >
    <h4 style={{margin : 0}} className="H4" >Trump Spudz</h4>
    {totalTrumVotes ? <h4 style={{margin : 0}} className="H4" >{totalTrumVotes}</h4> : <div className="skeleton w-24 h-9" ></div> }
    <button style={{margin : 0}} className="bg-red-500 rounded-xl H4 p-4" >54%</button>
    </div>
}


export const BidenVotes = ()=>{
    const {countriesVotes} = useCountriesVotesStore()

    let totalBidenVotes : number | undefined ; ;


     for(let i = 0 ; i < countriesVotes.length ; i++){
        totalBidenVotes = (totalBidenVotes || 0 ) + countriesVotes[i].biden
     }



    return        <div className="flex flex-col gap-7 items-center" >
    <h4 style={{margin : 0}} className="H4" >Biden Spudz</h4>
    {totalBidenVotes ?  <h4 style={{margin : 0}} className="H4" >{totalBidenVotes}</h4> : <div className="skeleton w-24 h-9" ></div> }
    <button style={{margin : 0}} className="bg-red-500 rounded-xl H4 p-4 " >46%</button>
   </div>
}