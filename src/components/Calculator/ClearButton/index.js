import React from "react";

export default function ClearcButton({ buttonVal, calc }) {
  return (
    <button
      onClick={() => {
        calc(0);
      }}
      type="button"
      class="btn btn-lg btn-primary"
    >
      {buttonVal}
    </button>
  );
}
