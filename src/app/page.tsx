import { useState } from "react";
import { LeaderBoard } from "./_components/leaderboard";
import { headers } from 'next/headers'
import { getIpAddressInfo } from "@/utils/ipAddress";
import { VotingUi } from "./_components/votingUi";
import { CountryInfoDb, CountryModal } from "@/db/modals/countryDb";
import { TotalVotes } from "./_components/totalVotes";


export default async function Home() {
  const ipAddress =   "41.97.129.253" ||  headers().get("x-forwarded-for")
  // console.log("ip addres data"  , ipAddressData) 
  const allCountriesVotes : CountryInfoDb[] = await CountryModal().find()


  
   return (
    <main className="max-w-[1500px] flex items-center  flex-col justify-center pt-3 px-3 pb-0 ">
      <img src="/pageTitle.png" width="900px" />
      <h5 className="text-3xl text-white tracking-wider font-bold mt-11 text-center" >Tap on your favorite Spudz candidate to cast your vote!</h5>
      <img src="/pageFlag.png" width="820px" />
      <VotingUi/>
      <TotalVotes/>
      <div id="votesComperation" className="flex mt-24 justify-between px-16 w-full items-end " >
      <div className="flex flex-col gap-7 items-center" >
       <h4 style={{margin : 0}} className="H4" >Trump Spudz</h4>
       <h4 style={{margin : 0}} className="H4" >12.325</h4>
       <button style={{margin : 0}} className="bg-red-500 rounded-xl H4 p-4" >54%</button>
       </div>
       <img src="/greaterSign.png" className="w-32" />
       <div className="flex flex-col gap-7 items-center" >
       <h4 style={{margin : 0}} className="H4" >Biden Spudz</h4>
       <h4 style={{margin : 0}} className="H4" >10.253</h4>
       <button style={{margin : 0}} className="bg-red-500 rounded-xl H4 p-4 " >46%</button>
      </div>
       </div>
       <img  className="mt-16" src="/leaderboard.png"  width="400px" />
       <LeaderBoard countriesVotes={allCountriesVotes} ipAddress={ipAddress || ""}/>
    </main>
  );
}
