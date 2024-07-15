"use client"
import {motion} from "framer-motion"
import countryLookUp from "country-code-lookup"
import React from "react"
import { getIpAddressInfo } from "@/utils/ipAddress"
import { useQuery } from "@tanstack/react-query"


export const LeaderBoard : React.FC<{ipAddress : string }> = ({ipAddress})=>{
     const {data , isLoading} = useQuery<{country : string }>({
        queryKey : [ipAddress]  , 
        queryFn : async  ()=>{ 
        const info = await getIpAddressInfo(ipAddress)
        return info
    },

     })

    const ipAddressInfo =  getIpAddressInfo(ipAddress)
    const countryName = countryLookUp.byInternet(ipAddressInfo?.country || "" )?.country || ""
    return        <motion.div className="bg-white w-[900px] px-8 py-4 mt-6  flex items-center justify-between" >
    <div></div>
    <div className="flex gap-4 items-center  " ><img src="/flags/ad.png"  width="50px" />12202552<img src="/icons/dropDown.svg" className="w-[25px]" /></div>
   </motion.div>

}