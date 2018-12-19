import React from "react";

export default function CalcButton({ buttonVal, calc, update }) {
  return (
    <button
      onClick={() => {
        update(curVal => buttonVal);
      }}
      type="button"
      class="btn btn-lg btn-primary"
    >
      {buttonVal}
    </button>
  );
}
