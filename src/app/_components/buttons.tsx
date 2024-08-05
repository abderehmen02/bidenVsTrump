"use client"
import {motion, useAnimation} from "framer-motion"


export const HeaderButtonsDesktop = ()=>{
    const rotateBtn = useAnimation()
    const zoomBtn = useAnimation()

const onHoverStart = ()=>{
    rotateBtn.start({
        rotate : [ 7, -7 , 5 , -5  , 3 , -3 , 1 , -1 , 0 , 0] , transition : {duration  : 1, ease: "easeIn" } 
    })
}



    return       <div className="w-full flex items-center justify-between" >
     <motion.div animate={rotateBtn} onHoverStart={onHoverStart} className="cursor-pointer hidden lg:block z-20 relative"   >   <img className="hidden lg:block" width="200px" src="/buyNow.png" style={{margin :0}} /></motion.div>
    <img src="/pageTitle.png" width="600px" className="" style={{margin : 0}}  />
    <div className="flex gap-5" >
    <motion.button whileHover={{scale : 1.1}} className="hidden relative z-20 lg:block px-6 py-2  text-xl bg-green-700 text-white font-bold border-4 rounded-xl border-white" >ABOUT $SPUDZ</motion.button>
    {/* <img className="hidden lg" width="200px" src="/home.png" style={{margin :0}} /> */}
    <div className="gap-3 hidden lg:flex" >
    <motion.img className="cursor-pointer" whileHover={{scale : 1.2}} width="50px" src="/telegram.png"   />
    <motion.img className="cursor-pointer" whileHover={{scale : 1.2}} width="50px" src="/x.webp"  />
    </div>
    </div>
    </div>
}

export const PageButtons = ()=>{
    return <div  className="flex py-3  px-1 lg:hidden w-full  relative  z-10  items-center justify-around" >
              <img  width="200px" src="/buyNow.png" style={{margin :0 }} />
              <motion.button whileHover={{scale : 1.1}} className="relative z-20 lg:block px-6 py-2  text-xl bg-green-700 text-white font-bold border-4 rounded-xl border-white" >ABOUT $SPUDZ</motion.button>
              </div>
}



