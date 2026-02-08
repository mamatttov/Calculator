import React from "react";

export default function Keys(props) {
  const { label, key, keyClass, onButtonClick } = props;
  const equalsClass =
    "col-[span_2] bg-[#ff9f0a] text-[#1a261a] font-semibold hover:bg-orange-500 text-white";
  return (
    <div
      onClick={() => {
        onButtonClick(label);
      }}
      key={key}
      className={`bg-[#141414] flex cursor-pointer items-center justify-center p-4 rounded-full hover:bg-[#ff9f0a] ${keyClass && equalsClass}`}
    >
      {label}
    </div>
  );
}
