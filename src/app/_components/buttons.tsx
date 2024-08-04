"use client"
import {motion} from "framer-motion"


export const HeaderButtonsDesktop = ()=>{
    return       <div className="w-full flex items-center justify-between" >
     <motion.div className="cursor-pointer z-20 relative"  whileHover={{rotate : [ 7, -7 , 5 , -5  , 3 , -3 , 1 , -1 , 0 , 0] , transition : {duration  : 1, ease: "easeIn" } }}  >   <img className="hidden lg:block" width="200px" src="/buyNow.png" style={{margin :0}} /></motion.div>
    <img src="/pageTitle.png" width="600px" className="" style={{margin : 0}}  />
    <img className="hidden lg:block" width="200px" src="/home.png" style={{margin :0}} />
    </div>
}

export const PageButtons = ()=>{
    return <div  className="flex py-1  px-1 lg:hidden w-full  relative  z-10  items-center justify-around" >
              <img  width="200px" src="/buyNow.png" style={{margin :0 }} />
              <img width="150px" src="/home.png" style={{margin :0  }} />
    </div>
}



