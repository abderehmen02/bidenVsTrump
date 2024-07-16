import { useState } from "react";
import { LeaderBoard } from "./_components/leaderboard";
import { headers } from 'next/headers'
import { getIpAddressInfo } from "@/utils/ipAddress";
import { VotingUi } from "./_components/votingUi";
import { CountryInfoDb, CountryModal } from "@/db/modals/countryDb";
import { TotalVotes } from "./_components/totalVotes";
import { BidenVotes, GreaterSign, TrumpVotes } from "./_components/candidates";
import { connectDbPromise } from "@/db/connect";


export default async function Home() {
  const ipAddress =   "41.234.128.24" ||  headers().get("x-forwarded-for")
  // console.log("ip addres data"  , ipAddressData) 
  await connectDbPromise
  const allCountriesVotes : CountryInfoDb[] = await CountryModal().find()


  
   return (
    <main className="max-w-[1500px] overflow-hidden flex items-center  flex-col justify-center pt-3 px-3 pb-0 ">
      <img src="/pageTitle.png" width="900px" />
      <h5 className="text-3xl text-white tracking-wider font-bold mt-11 text-center" >Tap on your favorite Spudz candidate to cast your vote!</h5>
      <img src="/pageFlag.png" width="820px" />
      <VotingUi/>
      <TotalVotes/>
      <div id="votesComperation" className="flex mt-24 justify-between px-16 w-full items-end " >
       <TrumpVotes/>
       <GreaterSign/>
        <BidenVotes/>
       </div>
       <img  className="mt-16" src="/leaderboard.png"  width="400px" />
       <LeaderBoard countriesVotes={allCountriesVotes} ipAddress={ipAddress || ""}/>
    </main>
  );
}
