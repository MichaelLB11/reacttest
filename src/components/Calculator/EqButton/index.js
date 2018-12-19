import React from "react";

export default function EqButton({ buttonVal, calc, previous, next, whichOp }) {
  return (
    <button
      onClick={() => {
        calc(curVal => curVal + previous);
      }}
      type="button"
      class="btn btn-lg btn-primary"
    >
      {buttonVal}
    </button>
  );
}
