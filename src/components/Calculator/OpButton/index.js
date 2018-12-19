import React from "react";

export default function CalcButton({ operator, setOp }) {
  return (
    <button
      onClick={() => {
        setOp(curVal => operator);
      }}
      type="button"
      class="btn btn-lg btn-primary"
    >
      {operator}
    </button>
  );
}
