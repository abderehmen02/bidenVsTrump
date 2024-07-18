"use client"
import { useVotes } from "@/hooks/useVotes"
import { cn } from "@/utils/tailwind"
import {motion, useAnimation} from "framer-motion"
import React, { useEffect, useRef, useState } from "react"
import { TotalVotes } from "./totalVotes"

export const VotingUi = ()=>{
const {addBidenVote , addTrumpVote} = useVotes()
const voteTrumpAnimation  = useAnimation()
const rotateTrumpAnimation = useAnimation()
const rotateBidenAnimation = useAnimation()
const voteBidenAnimation = useAnimation()
const [votingTrump , setVotingTrump ] = useState(false)
const [votingBiden, setVotingBiden] = useState(false)
const [trumpVoteAnimations , setTrumpVoteAnimations ] = useState<{element : React.ReactNode , key : number }[]>([])
const [bidenVoteAnimations , setBidenVoteAnimations ] = useState<React.ReactNode[]>([])
const trumpAnimationsKey = useRef<number>(0)
const bidenAnimationsKey = useRef(0)
const {getCountriesVotes  , addingVote} = useVotes()

const handleTrumpClick = ()=>{
    setVotingTrump(true)       
    addTrumpVote()
    trumpAnimationsKey.current += 1 ;
    trumpVoteAnimations.push({element  : <motion.h4  className={cn("H1 absolute top-10 right-0 text-white"  )} transition={{duration : 1}} initial={{y  : -300 , zIndex : 50 , opacity : 1 }} animate={{y : 0  , zIndex :-50 , opacity : [1,1,0.5,0]}} >+1</motion.h4> , key : trumpAnimationsKey.current  })

    // if(votingTrump) return 
    // voteTrumpAnimation.start({y : -0, opacity : 1, transition : {duration : 0.3} }).then(()=>{setVotingTrump(false)
    //     voteTrumpAnimation.start({y : -300 ,  transition : {duration : 0}})
    // })
    // rotateTrumpAnimation.start({rotate : [ 10 , -10 , 0  ]  , transition : {duration :1 } })
}

const handleBidenClick = ()=>{
    setVotingBiden(true)
    addBidenVote()
    if(votingBiden) return 
    voteBidenAnimation.start({y : -0, opacity : 1, transition : {duration : 0.3} }).then(()=>{setVotingBiden(false)
        voteBidenAnimation.start({y : -300 ,  transition : {duration : 0}})
    })
    rotateBidenAnimation.start({rotate : [ 10 , -10 , 0  ]  , transition : {duration :1 } })
}


// useEffect(()=>{
//     const intervalId =      setInterval(()=>{
//     getCountriesVotes()
//     } , 1000)
//    return ()=>{
//        clearInterval(intervalId)
//    }
//    } , [] )



    return <div className="flex relative  justify-center lg:gap-36 gap-20 px-8 w-full  z-0 lg:mt-1 mt-11" >
    <div className="flex z-10 relative flex-col lg:gap-0 gap-7" >
   <div> {trumpVoteAnimations.map(animation=>animation.element)}</div>
   <img  className="w-[300px] lg:w-[250px] " src="/trumpText.png" />
   <motion.img animate={rotateTrumpAnimation}   className="w-[380px] lg:w-[300px]  cursor-pointer" onClick={handleTrumpClick} src="/trumpBody.png" />
   </div>
   <div className="flex flex-col pt-28 gap-4 items-center " >
   <div className="z-0 absolute top-1/2 flex  justify-center left-1/2 w-7/12 -translate-x-1/2 -translate-y-1/2" >
   <img src="/vsBg.png" className="absolute z-[1]  lg:hidden opacity-70  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full"  />
   <img src="/vs.png"  className="z-[2]  w-[180px] -translate-y-24" />
   </div>
   <div className="hidden lg:block" ><TotalVotes/></div>
   </div> 
   <div className="flex z-10 relative flex-col lg:gap-0 gap-7" >
   <div> <motion.h4  initial={{y : -300 , opacity : 1}} animate={voteBidenAnimation} className={cn("H1 absolute top-10 right-0 text-white" , {"hidden" : !votingBiden} )} >+1</motion.h4></div>
   <img className="w-[300px] lg:w-[250px] " src="/bidenText.png" />
   <motion.img className="w-[380px] lg:w-[300px]  cursor-pointer" animate={rotateBidenAnimation} onClick={handleBidenClick} src="/bidenBody.png" />
   </div>

  </div>
}

