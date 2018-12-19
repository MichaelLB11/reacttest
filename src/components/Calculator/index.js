import React, { useState } from "react";
import CalcButton from "./CalcButton";
import CalcDisplay from "./CalcDisplay";
import ClearButton from "./ClearButton";

export default function Calculator() {
  const [num, calc] = useState(0);

  return (
    <>
      <CalcDisplay displayVal={num} />
      <br />
      <CalcButton buttonVal={1} calc={calc} />
      <CalcButton buttonVal={2} calc={calc} />
      <CalcButton buttonVal={3} calc={calc} />
      <br />
      <CalcButton buttonVal={4} calc={calc} />
      <CalcButton buttonVal={5} calc={calc} />
      <CalcButton buttonVal={6} calc={calc} />
      <br />
      <CalcButton buttonVal={7} calc={calc} />
      <CalcButton buttonVal={8} calc={calc} />
      <CalcButton buttonVal={9} calc={calc} />
      <br />
      <ClearButton buttonVal="c" calc={calc} />
      <CalcButton buttonVal={0} calc={calc} />
    </>
  );
}
