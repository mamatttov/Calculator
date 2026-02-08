import React from "react";

export default function Keys(props) {
  const { label, key } = props;
  return (
    <div>
      <button key={key}>{label}</button>
    </div>
  );
}
