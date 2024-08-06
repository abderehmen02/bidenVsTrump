"use client"
import {motion, useAnimation} from "framer-motion"
import countryLookUp, { Country } from "country-code-lookup"
import React, { useEffect, useRef, useState } from "react"
import { getIpAddressInfo } from "@/utils/ipAddress"
import { useQuery } from "@tanstack/react-query"
import { appConfig } from "@/config"
import { useCountrySymbolStore } from "@/store/countrySymbol"
import { CountryInfoDb } from "@/db/modals/countryDb"
import { useCountriesVotesStore } from "@/store/countriesDb"
import { useVotes } from "@/hooks/useVotes"
import { cn } from "@/utils/tailwind"


export const CountryVoteUi : React.FC<{countryVotes: CountryInfoDb  , index : number }> = ({countryVotes , index})=>{

    const countryName = countryLookUp.byInternet(countryVotes?.countrySymbol || "" )?.country || ""
    let medalSrcImg = "" ;
    switch (index) {
        case 0:
        medalSrcImg = "/gold.png"
            break;
            case 1:
                medalSrcImg = "/silver.png"
                    break;
                    case 2:
                        medalSrcImg = "/bronze.png"
                            break;
                
    }
    return <div className={cn("w-full flex relative countryLeaderBoardItem   items-center px-1  lg:px-4"  , {"border-t-2 border-black" : index === 0 }  )} >   
    <div  className="flex  items-center w-[30%] gap-1   lg:gap-3 " >
    <div className="min-w-[30px] max-w-[30px] lg:min-w-[50px] lg:max-w-[50px] flex items-center justify-center relative" >{medalSrcImg ? <img src={medalSrcImg} alt="medal" className="w-full " /> :  <h3 className="text-lg lg:text-2xl  block  font-bold "  >#{index + 1 }</h3>}</div>
    <img src={`/flags/${countryVotes.countrySymbol.trim().toLocaleLowerCase()}.png`} className="w-[30px] lg:w-[74px] border border-black " />
    <h4 style={{color : "black" , margin: 0  , textAlign: "start"}} className="H6 " >{countryName}</h4>
    </div>
    <div className="w-full flex px-2  py-1 lg:py-8 items-center justify-between" >
     <div className="w-full flex  items-center justify-end  gap-1 lg:gap-2  " >
     <h6 style={{color : "black" , margin: 0}} className="H6 " >{countryVotes.trump.toLocaleString()}</h6>

    <img  src="/trumpBody.png" className=" w-[38px] lg:w-[53px] " />
    <h4 style={{color : "black" , margin: 0}} className="H6 hidden lg:block" >Trump</h4>

     </div>
     <div className="w-full flex items-center  justify-end gap-1 lg:gap-2 " >
     <h6 style={{color : "black" , margin: 0}} className="H6 " > {countryVotes.biden.toLocaleString()}</h6>

    <img  src="/harisImg.png" className="w-[38px] lg:w-[53px]" />
    <h4 style={{color : "black" , margin: 0}} className="H6 hidden lg:block" >Harris</h4>

     </div>
    </div>
    </div>
}



export const LeaderBoard : React.FC<{ipAddress : string  , countriesVotes : CountryInfoDb[] }> = ({ipAddress , countriesVotes  : initialCountriesVotes })=>{
    const {countrySymbol , setCountrySymbol} = useCountrySymbolStore()
    const { countriesVotes , setCountriesVotes} = useCountriesVotesStore()
    const openLeaderboardAnimation = useAnimation()
    const {getCountriesVotes  , addingVote} = useVotes()
    const [leaderboardOpened , setLeaderboardOpened ] = useState(false)
    const leaderboardContainer = useRef<HTMLDivElement>(null)
    let totalCountryVotes  : number | undefined ;
     const {data , isLoading} = useQuery<{country : string }>({
        queryKey : [ipAddress]  , 
        queryFn : async  ()=>{ 
        // const countrySymbol = localStorage.getItem(appConfig.countryLocalStorageKey)
        // if(countrySymbol){ setCountrySymbol(countrySymbol) ; return {country : countrySymbol} }
        const info = await getIpAddressInfo(ipAddress)
        localStorage.setItem(appConfig.countryLocalStorageKey , info.country)
        setCountrySymbol(info.country)
        return info
    },
    })



    useEffect(()=>{
        setCountriesVotes(initialCountriesVotes) ;
        const intervalId =      setInterval(()=>{
        getCountriesVotes()
        } , 1000)
       return ()=>{
           clearInterval(intervalId)
       }
       } , [] )
    


       const userCountry = countriesVotes.find(country=>country.countrySymbol === countrySymbol)
       totalCountryVotes = userCountry ?  userCountry?.biden + userCountry?.trump : undefined

       const openLeaderBoard = ()=>{
        setLeaderboardOpened(true)
        if (leaderboardContainer.current) {
            const height = leaderboardContainer.current.getBoundingClientRect().height;
            openLeaderboardAnimation.start({y : -height , transition : {duration : 0.2}})
          }
     }


     const closeLeaderBoard = ()=>{
        setLeaderboardOpened(false)
        openLeaderboardAnimation.start({y : 0 , transition : { duration : 0.1} } )
     }
 


     const greatestCountry : CountryInfoDb | undefined = countriesVotes.length ? countriesVotes?.reduce((acc , countryVotes)=>{
if(acc.biden + acc.trump < countryVotes.biden+ countryVotes.trump) return countryVotes
else return acc
     }) : undefined
    return        <motion.div  initial={{y : 0}} animate={openLeaderboardAnimation} className={cn("  absolute bottom-0  w-full  mt-4 h-[56px] lg:h-[65px]    flex flex-col" , {"h-fit overflow-visible" : leaderboardOpened} )} >
    <div  className="px-3 lg:px-8 py-4 bg-white shadow-2xl border-b-2 border-black bg-opacity-55 backdrop-blur rounded-t-lg   flex items-center justify-between" >
    { greatestCountry ?  <div className="flex gap-1 items-center  " ><h4 style={{margin : 0 , color : "black" }} className="H7" >#1</h4>    <img src={`/flags/${greatestCountry.countrySymbol?.trim().toLowerCase()}.png`}  className="w-[30px] lg:w-[50px]" /><h6 className="H7" style={{margin : 0 , color : "black"}} >{ (greatestCountry.trump + greatestCountry.biden).toLocaleString() }</h6>    </div> : <div className="skeleton w-40 h-8" ></div> }
    <div className="flex gap-1 lg:gap-4 items-center  " >
    <img src={`/flags/${countrySymbol?.trim().toLowerCase()}.png`}  className="w-[30px] lg:w-[50px]" />
    <h6 className="H7" style={{margin : 0 , color : "black"}}>{ (totalCountryVotes?.toLocaleString()) || 0 }</h6>
    {leaderboardOpened ? <img onClick={closeLeaderBoard} src="/icons/dropDown.svg " className="w-[25px] rotate-180 cursor-pointer" /> :  <div className="relative"  ><img className="absolute lg:-left-10 -top-14 -left-5 lg:-top-20 min-w-[70px] lg:min-w-[100px]  z-30  min-h-[100]"  src="/clickAnimation.gif" /> <img onClick={openLeaderBoard} src="/icons/dropDown.svg " className="w-[25px]  z-50 relative cursor-pointer" /></div>}
    </div>
    </div>
    <div ref={leaderboardContainer} className="flex max-h-[44vh] lg:max-h-[44vh] leaderBoardScrollbar
 overflow-y-scroll bg-white bg-opacity-55 backdrop-blur  flex-col absolute top-14 lg:top-16 w-full gap-3" >
    {
        countriesVotes.sort((countryB, countryA)=>((countryA.trump + countryA.biden) - (countryB.trump + countryB.biden)) ).map((countryVote , index )=><CountryVoteUi key={countryVote.countrySymbol} index={index} countryVotes={countryVote} />)
    } 
    </div>
   </motion.div>

}