
export default function Home() {
  return (
    <main className="flex flex-col max-w-[1500px] items-center py-16 bg-black w-full h-full">
      <img src="/pageTitle.png" width="900px" />
      <h5 className="text-3xl text-white tracking-wider font-bold mt-11" >Tap on your favorite Spudz candidate to cast your vote!</h5>
      <img src="/pageFlag.png" width="820px" />
      <div className="flex relative  justify-center gap-32 px-14 w-full  z-0 mt-11" >
        <div className="flex z-10 relative flex-col gap-7" >
       <img  className="w-[400px]" src="/trumpText.png" />
       <img  className="w-[400px]" src="/trumpBody.png" />
       </div>
       <div className="z-0 absolute top-1/2 flex  justify-center left-1/2 w-[550px] -translate-x-1/2 -translate-y-1/2" >
       <img src="/vsBg.png" className="absolute z-[1]  opacity-70  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" width="550px" />
       <img src="/vs.png" className="z-[2] h-fit w-[320px] -translate-y-24" />
       </div>
       <div className="flex z-10 relative flex-col gap-7" >
       <img className="w-[400px]" src="/bidenText.png" />
       <img className="w-[400px]"  src="/bidenBody.png" />
       </div>

      </div>
    </main>
  );
}
