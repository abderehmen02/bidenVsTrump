"use client";

import { appConfig } from "@/config";
import { useMyVotesStore } from "@/store/myVotes";
import { useEffect } from "react";

export const MyVotesSection = () => {
  const { biden, trump, setTrumAndBiden } = useMyVotesStore();

  useEffect(() => {
    console.log("setting item");
    if (trump > 0 || biden > 0)
      localStorage.setItem("myvotes", JSON.stringify({ trump, biden }));
    console.log(localStorage.getItem("myvotes"));
  }, [biden, trump]);

  useEffect(() => {
    const localData = localStorage.getItem("myvotes");
    if (localData) setTrumAndBiden(JSON.parse(localData));
  }, []);

  return (
    <div className=" bg-gray-800 h-fit w-full rounded-3xl gap-5 flex items-center justify-center p-1 ">
      <div
        className="bg-green-700 rounded-3xl px-2 py-1 lg:px-4 lg:py-2 H5"
        style={{ margin: 0 }}
      >
        {biden.toLocaleString()}
      </div>
      <h3
        className="text-lg lg:text-2xl text-yellow-400 text-center"
        style={{ margin: 0 }}
      >
        Your Contributions
      </h3>
      <div
        className="bg-green-700 rounded-3xl px-2 py-1 lg:px-4 lg:py-2 H5"
        style={{ margin: 0 }}
      >
        {trump.toLocaleString()}
      </div>
    </div>
  );
};
