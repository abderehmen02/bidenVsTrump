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
import { HeaderButtonsDesktop, PageButtons } from "./_components/buttons";

const env = process.env.NODE_ENV
export default async function Home() {

  const ipAddress = env === "development" ? "41.97.83.242" :      headers().get("x-forwarded-for") 
  // console.log("ip addres data"  , ipAddressData) 
  await connectDbPromise
  const allCountriesVotes : CountryInfoDb[] = await CountryModal().find()


  
   return (
    <div style={{minHeight : "100vh" , margin: "0px" }} className="lg:max-w-[1500px]  pb-16   relative max-w-full justify-between lg:max-h-screen overflow-hidden flex items-center  flex-col    px-3 h-full  ">
      <HeaderButtonsDesktop/>
      <PageButtons/>

      <h5 style={{margin : 0}} className="text-lg leading-4 lg:text-3xl text-white  font-bold lg:mt-0 mt-8 text-center" >Tap on your favorite Spudz candidate to cast your vote!</h5>
      <img src="/pageFlag.png" className="hidden" width="820px" />
      <VotingUi/>
      <div className="lg:hidden my-2" > <MyVotesSection/></div>

      <div id="votesComperation" className="flex   justify-around items-center lg:justify-between px-2 lg:px-16 w-full " >
       <TrumpVotes/>
       <div className="flex flex-col items-center" ><GreaterSign/>
       <img  className="hidden lg:block w-[300px]"  src="/leaderboard.png"   />       
       </div>
        <BidenVotes/>
       </div>
       <img  className="mt-2 w-[200px] lg:hidden" src="/leaderboard.png"   />
       <LeaderBoard countriesVotes={allCountriesVotes} ipAddress={ipAddress || ""}/>
    </div>
  );
}
