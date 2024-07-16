import { useState } from "react";
import { LeaderBoard } from "./_components/leaderboard";
import { headers } from 'next/headers'
import { getIpAddressInfo } from "@/utils/ipAddress";
import { VotingUi } from "./_components/votingUi";
import { CountryInfoDb, CountryModal } from "@/db/modals/countryDb";
import { TotalVotes } from "./_components/totalVotes";
import { BidenVotes, TrumpVotes } from "./_components/candidates";


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
       <TrumpVotes/>
       <img src="/greaterSign.png" className="w-32" />
        <BidenVotes/>
       </div>
       <img  className="mt-16" src="/leaderboard.png"  width="400px" />
       <LeaderBoard countriesVotes={allCountriesVotes} ipAddress={ipAddress || ""}/>
    </main>
  );
}
