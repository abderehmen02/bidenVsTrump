"use client";
import { useCountriesVotesStore } from "@/store/countriesDb";
import { cn } from "@/utils/tailwind";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export const TrumpVotes = () => {
  const { countriesVotes } = useCountriesVotesStore();
  let racio: number | undefined;
  let totalTrumVotes: number | undefined;
  let totalVotes: number | undefined;
  for (let i = 0; i < countriesVotes.length; i++) {
    totalVotes =
      (totalVotes || 0) + (countriesVotes[i].biden + countriesVotes[i].trump);
  }

  for (let i = 0; i < countriesVotes.length; i++) {
    totalTrumVotes = (totalTrumVotes || 0) + countriesVotes[i].trump;
  }

  if (totalTrumVotes && totalVotes) {
    racio = (totalTrumVotes / totalVotes) * 100;
  }

  return (
    <div className="flex  flex-col lg:flex-row xl:flex-col lg:gap-2 gap-2 items-center">
      <h4
        style={{ margin: 0 }}
        className="text-xl lg:text-4xl text-white tracking-wider font-bold mt-11 text-center  m-0 leading-none"
      >
        Trump Spudz
      </h4>
      {totalTrumVotes ? (
        <h4 style={{ margin: 0 }} className="H4">
          {totalTrumVotes.toLocaleString()}
        </h4>
      ) : (
        <div className="skeleton w-24 h-9"></div>
      )}
      {racio ? (
        <button
          style={{ margin: 0 }}
          className="bg-red-500 rounded-xl H4 p-2 lg:p-4"
        >
          {racio.toFixed(1)}%
        </button>
      ) : (
        <div className="skeleton w-32 h-20"></div>
      )}
    </div>
  );
};

export const BidenVotes = () => {
  const { countriesVotes } = useCountriesVotesStore();

  let totalBidenVotes: number | undefined;
  let racio: number | undefined;
  let totalVotes: number | undefined;
  for (let i = 0; i < countriesVotes.length; i++) {
    totalVotes =
      (totalVotes || 0) + (countriesVotes[i].biden + countriesVotes[i].trump);
  }

  for (let i = 0; i < countriesVotes.length; i++) {
    totalBidenVotes = (totalBidenVotes || 0) + countriesVotes[i].biden;
  }

  if (totalBidenVotes && totalVotes) {
    racio = (totalBidenVotes / totalVotes) * 100;
  }

  return (
    <div className="flex flex-col lg:flex-row xl:flex-col  lg:gap-2 gap-2 items-center">
      <h4 style={{ margin: 0 }} className="H4">
        Haris Spudz
      </h4>
      {totalBidenVotes ? (
        <h4 style={{ margin: 0 }} className="H4">
          {totalBidenVotes.toLocaleString()}
        </h4>
      ) : (
        <div className="skeleton w-24 h-9"></div>
      )}
      {racio ? (
        <button
          style={{ margin: 0 }}
          className="bg-red-500 rounded-xl H4 p-2 lg:p-4"
        >
          {racio.toFixed(1)}%
        </button>
      ) : (
        <div className="skeleton w-32 h-20"></div>
      )}
    </div>
  );
};

export const GreaterSign = () => {
  const { countriesVotes } = useCountriesVotesStore();
  const changeWinnerAnimation = useAnimation();

  let totalBidenVotes: number | undefined;
  let totalTrumpVotes: number | undefined;
  let isTrumpWinner: boolean | undefined = undefined;

  for (let i = 0; i < countriesVotes.length; i++) {
    totalBidenVotes = (totalBidenVotes || 0) + countriesVotes[i].biden;
    totalTrumpVotes = (totalTrumpVotes || 0) + countriesVotes[i].trump;
  }

  if (totalBidenVotes && totalTrumpVotes) {
    isTrumpWinner = totalTrumpVotes > totalBidenVotes;
  }

  useEffect(() => {
    changeWinnerAnimation.start({
      rotate: isTrumpWinner ? 180 : 0,
      transition: { duration: 0.5 },
    });
  }, [isTrumpWinner]);

  if (isTrumpWinner === undefined) {
    return <div className="skeleton w-32 h-24 "></div>;
  }

  return (
    <motion.img
      animate={changeWinnerAnimation}
      initial={{ rotate: isTrumpWinner ? 180 : 0 }}
      src="/greaterSign.png"
      className={cn("w-16 lg:w-24")}
    ></motion.img>
  );
};
