import React from "react";
import Keys from "./Keys";
import { useState } from "react";
export default function Calculator() {
  const [showResult, setShowResult] = useState(false);
  const keys = [
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    ".",
    "0",
    "EQUALS",
  ];
  return (
    <div className="min-w-[320px] bg-black flex flex-col gap-4 p-4 rounded-2xl">
      <div className="overflow-x-auto bg-[#141414] min-h-[100px] flex items-end justify-end  flex-col p-4 rounded-[10px]">
        Result
      </div>
      <div>
        {keys.map((item, index) => (
          <Keys label={item} key={index} />
        ))}
      </div>
    </div>
  );
}
