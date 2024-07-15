"use client"

import React from "react"
import { QueryClientProvider , QueryClient } from "@tanstack/react-query"


const queryClient = new QueryClient()







export const AppProvider : React.FC<{children : React.ReactNode}> = ({children})=>{
return <QueryClientProvider client={queryClient} >
{children}
</QueryClientProvider>

}

