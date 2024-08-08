"use client"

import { useCountriesVotesStore } from "@/store/countriesDb"
import { color } from "framer-motion";
import AnimatedNumber from "react-animated-number";

export const TotalVotes = ()=>{
    const {countriesVotes} = useCountriesVotesStore()
    let totalVotes : number | undefined  ;
    for(let i = 0 ; i< countriesVotes.length ; i++){
        totalVotes = (totalVotes || 0) + (countriesVotes[i].biden + countriesVotes[i].trump)
    }

    return      <><div id="totalVotes" className="flex lg:hidden flex-col items-center gap-1 lg:mt-9" >
    <h4 className="H4 " style={{margin : 0}} >Total Votes</h4>
    {totalVotes ?   <h4 className="H4 " style={{margin : 0}}>{totalVotes.toLocaleString()}</h4>  : <div className="skeleton w-24 h-9" ></div>}
    </div>
    <div className="lg:flex hidden flex-col gap-4 items-center justify-center">
    <div id="totalVotes" className="flex flex-col items-center gap-1 mt-9" >
    <h4 className="H4 " style={{margin : 0}} >Total Votes</h4>
    {totalVotes ?       <AnimatedNumber
      component="text"
      initialValue={0}
      value={totalVotes}
      stepPrecision={0}
      
      style={{
        transition: "0.8s ease-out",
        fontSize: 48,
        color : "#fff" ,
        transitionProperty: "background-color, color, opacity" ,
        fontWeight : "bold" 
      }}
      duration={2000}
      formatValue={n => Intl.NumberFormat("en-US").format(n)}
    />
    
    // <h4 className="H4 " style={{margin : 0}}></h4>
      : <div className="skeleton w-24 h-9" ></div>}
    </div>
    {/* <img src="/leaderboard.png" width="200px" /> */}
    </div>
    </> 
}