"use client"
import { useVotes } from "@/hooks/useVotes"
import { cn } from "@/utils/tailwind"
import {motion, useAnimation} from "framer-motion"
import React, { useEffect, useRef, useState } from "react"
import { TotalVotes } from "./totalVotes"
import { useMyVotesStore } from "@/store/myVotes"
import { MyVotesSection } from "./myVotesSection"

export const VotingUi = ()=>{
const {addBidenVote , addTrumpVote} = useVotes()
const voteTrumpAnimation  = useAnimation()
const rotateTrumpAnimation = useAnimation()
const rotateBidenAnimation = useAnimation()
const voteBidenAnimation = useAnimation()
const [votingTrump , setVotingTrump ] = useState(false)
const votingTrumpTimeout = useRef<NodeJS.Timeout | null>(null)
const votingBidenTimeout = useRef<NodeJS.Timeout | null>(null)

const [votingBiden, setVotingBiden] = useState(false)
const [trumpVoteAnimations , setTrumpVoteAnimations ] = useState<{element : React.ReactNode , key : number }[]>([])
const [bidenVoteAnimations , setBidenVoteAnimations ] = useState<{element : React.ReactNode , key : number }[]>([])
const trumpAnimationsKey = useRef<number>(0)
const bidenAnimationsKey = useRef(0)
const {increaseTrump , increaseBiden} = useMyVotesStore()
const {getCountriesVotes  , addingVote} = useVotes()


const handleTrumpClick = ()=>{
    setVotingTrump(true)
    if(votingTrumpTimeout.current) clearTimeout(votingTrumpTimeout.current)
    const timeoutId =  setTimeout(() => {
        setVotingTrump(false)
    }, (500));
    votingTrumpTimeout.current = timeoutId
    let clickSound = new Audio("/spudzSound.mp3")
    clickSound.play()
   addTrumpVote()
   increaseTrump()
    trumpAnimationsKey.current += 1 ;
    setTrumpVoteAnimations((animations)=>([ ...animations , {element  : <motion.h4  className={cn("H1 absolute top-10 right-0 text-white"  )} transition={{duration : 1}} initial={{y  : -300 , zIndex : 50 , opacity : 1 }} animate={{y : 0  , zIndex :-50 , opacity : [1,1,0.5,0]}} >+1</motion.h4> , key : trumpAnimationsKey.current  }]))

    // if(votingTrump) return 
    // voteTrumpAnimation.start({y : -0, opacity : 1, transition : {duration : 0.3} }).then(()=>{setVotingTrump(false)
    //     voteTrumpAnimation.start({y : -300 ,  transition : {duration : 0}})
    // })
    // rotateTrumpAnimation.start({rotate : [ 10 , -10 , 0  ]  , transition : {duration :1 } })
}

const handleBidenClick = ()=>{
    setVotingBiden(true)
    if(votingBidenTimeout.current) clearTimeout(votingBidenTimeout.current)
    const timeoutId =  setTimeout(() => {
        setVotingBiden(false)
    }, (500));
    votingBidenTimeout.current = timeoutId

    let clickSound = new Audio("/spudzSound.mp3")
    clickSound.play()   
    increaseBiden()
    addBidenVote()
    bidenAnimationsKey.current += 1 ;
    setBidenVoteAnimations((animations)=>([ ...animations , {element  : <motion.h4  className={cn("H1 absolute top-10 right-0 text-white"  )} transition={{duration : 1}} initial={{y  : -300 , zIndex : 50 , opacity : 1 }} animate={{y : 0  , zIndex :-50 , opacity : [1,1,0.5,0]}} >+1</motion.h4> , key : bidenAnimationsKey.current  }]))
}


// useEffect(()=>{
//     const intervalId =      setInterval(()=>{
//     getCountriesVotes()
//     } , 1000)
//    return ()=>{
//        clearInterval(intervalId)
//    }
//    } , [] )



    return <div className="flex relative  justify-between lg:gap-36  lg:px-8 w-full  z-0 lg:mt-1 mt-2" >
    <div className="flex z-10 relative  flex-col items-center lg:gap-0 gap-4" >
   <div> {trumpVoteAnimations.map(animation=>animation.element)}</div>
   <img  className="w-[300px] lg:w-[250px] " src="/trumpText.png" />
   <div className="relative flex items-center justify-center  overflow-visible h-fit " >
    {votingTrump &&  <img src="/animationPic.gif" className="absolute z-10 min-w-[350px]  lg:min-w-[500px]  "  />}
    <img    className="w-[380px] lg:w-[200px] relative z-20 cursor-pointer" onClick={handleTrumpClick} src="/trumpBody.png" /></div>
   </div>
   <div className="flex flex-col pt-5 lg:pt-8 w-[300px]  gap-4 items-center justify-between " >
   <div className="z-0  absolute top-1/2 flex  justify-center left-1/2 w-7/12 -translate-x-1/2 -translate-y-1/2" >
   <img src="/vsBg.png" className="absolute z-[1]  lg:hidden opacity-70  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full"  />
   <img src="/vs.png"  className="z-[2] w-[120px]  lg:w-[180px] -translate-y-12 lg:-translate-y-28" />
   </div>
<div className="mt-20" ><TotalVotes/></div>
<div className="hidden lg:block" >   <MyVotesSection/></div>

   </div> 

   <div className="flex z-10 relative   flex-col items-center lg:gap-0 gap-4" >    
   <div> {bidenVoteAnimations.map(animation=>animation.element)}</div>
   <img className="w-[300px] lg:w-[250px] " src="/harisName.png" />
   <div className="relative flex items-center justify-center  overflow-visible h-fit " >
   {votingBiden &&  <img src="/animationPic.gif" className="absolute z-10 min-w-[350px]  lg:min-w-[500px]  "  />}
   <img className="w-[380px] lg:w-[200px] z-20  cursor-pointer"  onClick={handleBidenClick} src="/harisImg.png" />
   </div>
   </div>

  </div>
}