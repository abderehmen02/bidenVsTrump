
export default function Home() {
  return (
    <main className="flex flex-col items-center py-16 bg-black w-full h-full">
      <img src="/pageTitle.png" width="900px" />
      <h5 className="text-3xl text-white tracking-wider font-bold mt-11" >Tap on your favorite Spudz candidate to cast your vote!</h5>
      <img src="/pageFlag.png" width="820px" />
      <div className="flex relative" >
        <div className="flex flex-col gap-7" >
       <img src="/trumpText.png" />
       <img src="/trumpBody.png" />
       </div>
       <img src="/vs.png" />
       <div className="flex flex-col gap-7" >
       <img src="/bidenText.png" />
       <img src="/bidenBody.png" />
       </div>

      </div>
    </main>
  );
}
