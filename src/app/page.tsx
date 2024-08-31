import { useState } from "react";
import { LeaderBoard } from "./_components/leaderboard";
import { headers } from "next/headers";
import { getIpAddressInfo } from "@/utils/ipAddress";
import { VotingUi } from "./_components/votingUi";
import { CountryInfoDb, CountryModal } from "@/db/modals/countryDb";
import { TotalVotes } from "./_components/totalVotes";
import { BidenVotes, GreaterSign, TrumpVotes } from "./_components/candidates";
import { connectDbPromise } from "@/db/connect";
import { MyVotesSection } from "./_components/myVotesSection";
import { HeaderButtonsDesktop, PageButtons } from "./_components/buttons";
import { Timer } from "./_components/timer";

const env = process.env.NODE_ENV;
export default async function Home() {
  const ipAddress =
    env === "development" ? "41.97.83.242" : headers().get("x-forwarded-for");
  // console.log("ip addres data"  , ipAddressData)
  await connectDbPromise;
  const allCountriesVotes: CountryInfoDb[] = await CountryModal().find();

  return (
    <div
      style={{ height: "100svh" }}
      className="lg:max-w-[1500px] pb-16  overflow-hidden    relative max-w-full justify-between lg:max-h-screen  flex items-center  flex-col    px-3 h-full  "
    >
      <div className="pageScrollBar  w-full  flex items-center overflow-x-hidden flex-col justify-between h-full overflow-y-scroll">
        <HeaderButtonsDesktop />
        <PageButtons />

        <h5
          style={{ margin: 0 }}
          className="text-lg leading-4 lg:text-3xl text-white  font-bold lg:mt-0 mt-4 text-center"
        >
          Tap on your favorite Spudz candidate to cast your vote!
        </h5>
        <img src="/pageFlag.png" className="hidden" width="820px" />
        <VotingUi />
        <div className="lg:hidden">
          <MyVotesSection />
        </div>

        <div
          id="votesComperation"
          className="flex    my-2 justify-around items-center lg:justify-between px-2 lg:px-16 w-full "
        >
          <BidenVotes />

          <div className="flex flex-col items-center">
            <GreaterSign />
            <div className="hidden lg:block">
              <Timer />
            </div>
          </div>
          <TrumpVotes />
        </div>
        <div className="lg:hidden">
          <Timer />
        </div>
      </div>
      <LeaderBoard
        countriesVotes={allCountriesVotes}
        ipAddress={ipAddress || ""}
      />
    </div>
  );
}
