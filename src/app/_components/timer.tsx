"use client";
import { useEffect, useState } from "react";
import Display from "seven-segment-display";

export const Timer = () => {
  const initialEndDate = new Date(2024, 9, 30);
  const [days, setDays] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [hour, sethour] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = Date.now();
      const timeRemaining = initialEndDate.getTime() - now;

      setMin(Math.floor((timeRemaining / 60000) % 60));
      sethour(Math.floor((timeRemaining / 3600000) % 24));
      setDays(Math.floor((initialEndDate.getTime() - Date.now()) / 86400000));
      setSec(Math.floor((timeRemaining / 1000) % 60));
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const displayedDays = String(days).length === 1 ? `0${days}` : String(days);
  const displayedMin = String(min).length === 1 ? `0${min}` : String(min);
  const displayedHour = String(hour).length === 1 ? `0${hour}` : String(hour);
  const displayedSec = String(sec).length === 1 ? `0${sec}` : String(sec);
  console.log(displayedDays, displayedMin, displayedHour, displayedSec);
  return (
    <div className="flex mb-4 flex-col items-center -translate-x-5 lg:translate-x-0  gap-1">
      <h5 className="text-xl block  text-center translate-x-4 lg:translate-x-5 text-white">
        Voting ends on October 30 th, 2024
      </h5>
      <div className=" flex ">
        <div className="flex ">
          <div className="w-[100px] lg:w-[150px]  relative  ">
            <Display value={displayedDays} color="#0ced44" />
            <h5 className="text-xl absolute right-3 -bottom-6 font-semibold  text-white">
              Days
            </h5>
          </div>
          <div className="w-[100px] lg:w-[150px] relative  ">
            <Display value={displayedHour} color="#0ced44" />
            <h5 className="text-xl absolute right-2 -bottom-6 font-semibold  text-white">
              Hours
            </h5>
            <h5 className="text-4xl lg:text-6xl absolute -top-2 left-6 lg:left-8  flex items-center justify-center h-fit   text-green-400 font-bold">
              :
            </h5>
          </div>
        </div>
        <div className="flex">
          <div className="w-[100px] lg:w-[150px] relative ">
            <Display value={displayedMin} color="#0ced44" />
            <h5 className="text-xl absolute right-2 -bottom-6 font-semibold  text-white">
              Mins
            </h5>
            <h5 className="text-4xl lg:text-6xl absolute -top-2 left-6 lg:left-8 flex items-center justify-center h-fit   text-green-400 font-bold">
              :
            </h5>
          </div>
          <div className="w-[100px] lg:w-[150px] relative  ">
            <Display value={displayedSec} color="#0ced44" />
            <h5 className="text-xl absolute right-2 -bottom-6 font-semibold  text-white">
              Secs
            </h5>
            <h5 className="text-4xl lg:text-6xl absolute -top-2 left-6 lg:left-8 flex items-center justify-center h-fit   text-green-400 font-bold">
              :
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};
