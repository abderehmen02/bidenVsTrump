import { useState } from "react";
import { LeaderBoard } from "./_components/leaderboard";
import { headers } from 'next/headers'
import { getIpAddressInfo } from "@/utils/ipAddress";


export default async function Home() {
  const ipAddress =  headers().get("x-forwarded-for")
  // console.log("ip addres data"  , ipAddressData) 
   return (
    <main className="max-w-[1500px] flex items-center  flex-col justify-center pt-3 px-3 pb-0 ">
      <img src="/pageTitle.png" width="900px" />
      <h5 className="text-3xl text-white tracking-wider font-bold mt-11 text-center" >Tap on your favorite Spudz candidate to cast your vote!</h5>
      <img src="/pageFlag.png" width="820px" />
      <div className="flex relative  justify-center gap-32 px-14 w-full  z-0 mt-11" >
        <div className="flex z-10 relative flex-col gap-7" >
       <img  className="w-[400px]" src="/trumpText.png" />
       <img  className="w-[400px]" src="/trumpBody.png" />
       </div>
       <div className="z-0 absolute top-1/2 flex  justify-center left-1/2 w-7/12 -translate-x-1/2 -translate-y-1/2" >
       <img src="/vsBg.png" className="absolute z-[1]  opacity-70  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full"  />
       <img src="/vs.png" className="z-[2] h-fit w-[320px] -translate-y-24" />
       </div>
       <div className="flex z-10 relative flex-col gap-7" >
       <img className="w-[400px]" src="/bidenText.png" />
       <img className="w-[400px]"  src="/bidenBody.png" />
       </div>

      </div>


      <div id="totalVotes" className="flex flex-col gap-1 mt-9" >
      <h4 className="H4 " style={{margin : 0}} >Total Votes</h4>
      <h4 className="H4 " style={{margin : 0}}>{22.801}</h4>
      </div>
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
       <LeaderBoard/>
    </main>
  );
}
