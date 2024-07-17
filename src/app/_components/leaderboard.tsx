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


export const CountryVoteUi : React.FC<{countryVotes: CountryInfoDb}> = ({countryVotes})=>{

    const countryName = countryLookUp.byInternet(countryVotes?.countrySymbol || "" )?.country || ""

    return <div className="w-full flex items-center  px-4" >   
    <div  className="flex items-center  gap-3" >
    <img src={`/flags/${countryVotes.countrySymbol.trim().toLocaleLowerCase()}.png`} className="w-[74px] border border-black " />
    <h4 style={{color : "black" , margin: 0}} className="H6" >{countryName}</h4>
    </div>
    <div className="w-full flex px-2 py-8 items-center justify-between" >
     <div className="w-full flex items-center justify-end gap-2  " >
     <h6 style={{color : "black" , margin: 0}} className="H6" >{countryVotes.trump}</h6>

    <img  src="/trumpBody.png" className="w-[40px]" />
    <h4 style={{color : "black" , margin: 0}} className="H6" >Trump</h4>

     </div>
     <div className="w-full flex items-center justify-end gap-2 " >
     <h6 style={{color : "black" , margin: 0}} className="H6 " > {countryVotes.biden}</h6>

    <img  src="/bidenBody.png" className="w-[40px]" />
    <h4 style={{color : "black" , margin: 0}} className="H6" >Biden</h4>

     </div>
    </div>
    </div>
}



export const LeaderBoard : React.FC<{ipAddress : string  , countriesVotes : CountryInfoDb[] }> = ({ipAddress , countriesVotes  : initialCountriesVotes })=>{
    console.log("ip address" , ipAddress)
    const {countrySymbol , setCountrySymbol} = useCountrySymbolStore()
    const { countriesVotes , setCountriesVotes} = useCountriesVotesStore()
    const openLeaderboardAnimation = useAnimation()
    const [leaderboardOpened , setLeaderboardOpened ] = useState(false)
    const leaderboardContainer = useRef<HTMLDivElement>(null)
     const {data , isLoading} = useQuery<{country : string }>({
        queryKey : [ipAddress]  , 
        queryFn : async  ()=>{ 
        const countrySymbol = localStorage.getItem(appConfig.countryLocalStorageKey)
        if(countrySymbol){ setCountrySymbol(countrySymbol) ; return {country : countrySymbol} }
        const info = await getIpAddressInfo(ipAddress)
        console.log("info" , info)
        localStorage.setItem(appConfig.countryLocalStorageKey , info.country)
        setCountrySymbol(info.country)
        return info
    },
    })



    useEffect(()=>{
     setCountriesVotes(initialCountriesVotes)
    } , [] )

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

    return        <motion.div  initial={{y : 0}} animate={openLeaderboardAnimation} className="bg-white relative  w-[900px]  mt-6  flex flex-col" >
    <div className="px-8 py-4  flex items-center justify-between" >
    <div></div>
    <div className="flex gap-4 items-center  " >
    <img src="/flags/ad.png"  width="50px" />12202552
    {leaderboardOpened ? <img onClick={closeLeaderBoard} src="/icons/dropDown.svg " className="w-[25px] rotate-180 cursor-pointer" /> :  <img onClick={openLeaderBoard} src="/icons/dropDown.svg " className="w-[25px] cursor-pointer" />}
    </div>
    </div>
    <div ref={leaderboardContainer} className="flex bg-white flex-col absolute top-16 w-full gap-3" >
    {
        countriesVotes.map(countryVote=><CountryVoteUi key={countryVote.countrySymbol} countryVotes={countryVote} />)
    } 
    </div>
   </motion.div>

}