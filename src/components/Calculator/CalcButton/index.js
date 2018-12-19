import React from "react";

export default function CalcButton({ buttonVal, calc }) {
  return (
    <button
      onClick={() => {
        calc(curVal => curVal + buttonVal);
      }}
      type="button"
      class="btn btn-lg btn-primary"
    >
      {buttonVal}
    </button>
  );
}
