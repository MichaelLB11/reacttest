import React from "react";
import Calculator from "../../Calculator";

export default function CalcButton({ buttonVal }) {
  return (
    <button type="button" class="btn btn-primary">
      {buttonVal}
    </button>
  );
}
