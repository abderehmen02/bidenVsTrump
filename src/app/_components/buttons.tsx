"use client"
import {motion, useAnimation} from "framer-motion"
import { useRouter } from "next/navigation"


export const HeaderButtonsDesktop = ()=>{
    const rotateBtn = useAnimation()
    const zoomBtn = useAnimation()
    const router = useRouter()
const onHoverStart = ()=>{
    rotateBtn.start({
        rotate : [ 7, -7 , 5 , -5  , 3 , -3 , 1 , -1 , 0 , 0] , transition : {duration  : 1, ease: "easeIn" } 
    })
}



    return       <div style={{margin : 0}} className="w-full flex  relative items-center justify-between" >
     <motion.a target="_blank" href="https://spudz-presale.netlify.app/" animate={rotateBtn} onHoverStart={onHoverStart} className="cursor-pointer hidden lg:block z-0 relative"   >   <img className="hidden lg:block" width="200px" src="/buyNow.png" style={{margin :0}} /></motion.a>
    <img src="/pageTitle.png"  className="w-[400px] lg:w-[600px]" style={{margin : 0}}  />
    <div className="flex gap-5" >
    <a href=" www.thespudz.xyz" target="_blank" > <motion.div whileHover={{scale : 1.1}} className="hidden relative  lg:block px-6 py-2  z-0 text-xl bg-green-700 text-white font-bold border-4 rounded-xl border-white" >ABOUT $SPUDZ</motion.div></a>
    {/* <img className="hidden lg" width="200px" src="/home.png" style={{margin :0}} /> */}
    <div className="gap-3 hidden lg:flex" >
    <a href="https://t.me/+Btb7EqqapDhlOTc5" target="_blank"><motion.img className="cursor-pointer" whileHover={{scale : 1.2}} width="50px" src="/telegram.png"   /></a>
    <a href="https://x.com/TheSpudz2024" target="_blank" ><motion.img className="cursor-pointer" whileHover={{scale : 1.2}} width="50px" src="/x.webp"  /></a>
    </div>
    </div>
    </div>
}

export const PageButtons = ()=>{
    const router  = useRouter()
    return <div style={{margin :0}} className="flex  py-2 lg:py-3    px-1 lg:hidden w-full  relative  z-0  items-center justify-around" >
           <a href="https://t.me/+Btb7EqqapDhlOTc5" target="_blank" > <img  className="cursor-pointer"  width="25px" src="/telegram.png"   /></a>

               <a href="https://spudz-presale.netlify.app/" target="_blank" > <img   className="w-[130px] relative z-0  lg:w-[200px]" src="/buyNow.png" style={{margin :0 }} /></a>
             <a target="_blank" href="www.thespudz.xyz" > <motion.div  whileHover={{scale : 1.1}} className="relative z-20 lg:block lg:px-6 px-2 py-1 lg:py-2  lg:text-xl bg-green-700 text-white font-bold border-2 rounded-xl border-white" >ABOUT $SPUDZ</motion.div></a>
              <div className="gap-1 flex" >
    <a target="_blank" href="https://x.com/TheSpudz2024"  ><img  className="cursor-pointer"  width="25px" src="/x.webp"  /></a>
    </div>
              </div>
}



