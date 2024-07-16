"use client"
import { useVotes } from "@/hooks/useVotes"
import { cn } from "@/utils/tailwind"
import {motion, useAnimation} from "framer-motion"
import { useState } from "react"

export const VotingUi = ()=>{
const {addBidenVote , addTrumpVote} = useVotes()
const voteTrumpAnimation  = useAnimation()
const rotateTrumpAnimation = useAnimation()
const rotateBidenAnimation = useAnimation()
const voteBidenAnimation = useAnimation()
const [votingTrump , setVotingTrump ] = useState(false)
const [votingBiden, setVotingBiden] = useState(false)


const handleTrumpClick = ()=>{
    if(votingTrump) return 
    setVotingTrump(true)       
    addTrumpVote()
    voteTrumpAnimation.start({y : -0, opacity : 1, transition : {duration : 0.3} }).then(()=>{setVotingTrump(false)
        voteTrumpAnimation.start({y : -300 ,  transition : {duration : 0}})
    })
    rotateTrumpAnimation.start({rotate : [ 10 , -10 , 0  ]  , transition : {duration :1 } })
}

const handleBidenClick = ()=>{
    if(votingBiden) return 
    setVotingBiden(true)
    addBidenVote()
    voteBidenAnimation.start({y : -0, opacity : 1, transition : {duration : 0.3} }).then(()=>{setVotingBiden(false)
        voteBidenAnimation.start({y : -300 ,  transition : {duration : 0}})
    })
    rotateBidenAnimation.start({rotate : [ 10 , -10 , 0  ]  , transition : {duration :1 } })
}






    return <div className="flex relative  justify-center gap-32 px-14 w-full  z-0 mt-11" >
    <div className="flex z-10 relative flex-col gap-7" >
    <motion.h4  initial={{y : -300 , opacity : 1}} animate={voteTrumpAnimation} className={cn("H1 absolute top-44 right-0 text-white" , {"hidden" : !votingTrump} )} >+1</motion.h4>
   <img  className="w-[400px]" src="/trumpText.png" />
   <motion.img animate={rotateTrumpAnimation}   className="w-[400px] cursor-pointer" onClick={handleTrumpClick} src="/trumpBody.png" />
   </div>
   <div className="z-0 absolute top-1/2 flex  justify-center left-1/2 w-7/12 -translate-x-1/2 -translate-y-1/2" >
   <img src="/vsBg.png" className="absolute z-[1]  opacity-70  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full"  />
   <img src="/vs.png"  className="z-[2] h-fit w-[320px] -translate-y-24" />
   </div> 
   <div className="flex z-10 relative flex-col gap-7" >
   <motion.h4  initial={{y : -300 , opacity : 1}} animate={voteBidenAnimation} className={cn("H1 absolute top-44 right-0 text-white" , {"hidden" : !votingBiden} )} >+1</motion.h4>
   <img className="w-[400px]" src="/bidenText.png" />
   <motion.img className="w-[400px] cursor-pointer" animate={rotateBidenAnimation} onClick={handleBidenClick} src="/bidenBody.png" />
   </div>

  </div>
}

