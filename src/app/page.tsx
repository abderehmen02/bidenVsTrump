import { useState } from "react";
import { LeaderBoard } from "./_components/leaderboard";
import { headers } from 'next/headers'
import { getIpAddressInfo } from "@/utils/ipAddress";
import { VotingUi } from "./_components/votingUi";
import { CountryInfoDb, CountryModal } from "@/db/modals/countryDb";
import { TotalVotes } from "./_components/totalVotes";
import { BidenVotes, GreaterSign, TrumpVotes } from "./_components/candidates";
import { connectDbPromise } from "@/db/connect";
import { MyVotesSection } from "./_components/myVotesSection";


export default async function Home() {
  const ipAddress =     headers().get("x-forwarded-for") 
  // console.log("ip addres data"  , ipAddressData) 
  await connectDbPromise
  const allCountriesVotes : CountryInfoDb[] = await CountryModal().find()


  
   return (
    <main className="lg:max-w-[1500px] max-w-full lg:max-h-screen overflow-hidden flex items-center  flex-col justify-center pt-3 lg:pt-0 px-3 pb-0 ">
      <img src="/pageTitle.png" width="600px" className="" style={{margin : 0}}  />
      <h5 style={{margin : 0}} className="text-3xl text-white tracking-wider font-bold lg:mt-0 mt-11 text-center" >Tap on your favorite Spudz candidate to cast your vote!</h5>
      <img src="/pageFlag.png" className="hidden" width="820px" />
      <VotingUi/>
      <div className="block lg:hidden" ><TotalVotes/></div>
      <div id="votesComperation" className="flex lg:mt-4 mt-4 justify-between px-2 lg:px-16 w-full items-end " >
       <TrumpVotes/>
       <GreaterSign/>
        <BidenVotes/>
       </div>
      <div className="lg:hidden mt-10" > <MyVotesSection/></div>
       <img  className="mt-5 lg:hidden" src="/leaderboard.png"  width="400px" />
       <LeaderBoard countriesVotes={allCountriesVotes} ipAddress={ipAddress || ""}/>
    </main>
  );
}
