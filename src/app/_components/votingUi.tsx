"use client"
import { useVotes } from "@/hooks/useVotes"


export const VotingUi = ()=>{
const {addBidenVote , addTrumpVote} = useVotes()

const handleTrumpClick = ()=>{
    console.log("voting for trump")
    addTrumpVote()
}

const handleBidenClick = ()=>{
    addBidenVote()
}





    return <div className="flex relative  justify-center gap-32 px-14 w-full  z-0 mt-11" >
    <div className="flex z-10 relative flex-col gap-7" >
   <img  className="w-[400px]" src="/trumpText.png" />
   <img  className="w-[400px]" onClick={handleTrumpClick} src="/trumpBody.png" />
   </div>
   <div className="z-0 absolute top-1/2 flex  justify-center left-1/2 w-7/12 -translate-x-1/2 -translate-y-1/2" >
   <img src="/vsBg.png" className="absolute z-[1]  opacity-70  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full"  />
   <img src="/vs.png"  className="z-[2] h-fit w-[320px] -translate-y-24" />
   </div>
   <div className="flex z-10 relative flex-col gap-7" >
   <img className="w-[400px]" src="/bidenText.png" />
   <img className="w-[400px]" onClick={handleBidenClick} src="/bidenBody.png" />
   </div>

  </div>
}

