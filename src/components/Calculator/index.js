import React, { useState } from "react";
import CalcButton from "./CalcButton";
import CalcDisplay from "./CalcDisplay";

function calculate(val) {
  const [x, setDisplay] = useState(val);
  return [x, () => setDisplay((x = val))];
}

export default function Calculator() {
  const [num, calc] = calculate();

  return (
    <>
      <CalcDisplay displayVal="0" />
      <br />
      <CalcButton buttonVal="1" onClick={calc} />
      <CalcButton buttonVal="2" />
      <CalcButton buttonVal="3" />
      <br />
      <CalcButton buttonVal="4" />
      <CalcButton buttonVal="5" />
      <CalcButton buttonVal="6" />
      <br />
      <CalcButton buttonVal="7" />
      <CalcButton buttonVal="8" />
      <CalcButton buttonVal="9" />
      <br />
      <CalcButton buttonVal="c" />
      <CalcButton buttonVal="0" />
      <CalcButton buttonVal="=" />
    </>
  );
}
