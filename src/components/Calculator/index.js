import React, { useState } from "react";
import CalcButton from "./CalcButton";
import CalcDisplay from "./CalcDisplay";
import ClearButton from "./ClearButton";
import OpButton from "./OpButton";
import EqButton from "./EqButton";

export default function Calculator() {
  const [num, calc] = useState(0);
  const [op, setOp] = useState("+");
  const [prevVal, update] = useState(5);
  const [nextVal] = useState(6);
  const [ansDisplay, addUp] = useState(0);

  return (
    <>
      <CalcDisplay displayVal={num} />
      <br />
      <CalcButton buttonVal={1} update={update} />
      <CalcButton buttonVal={2} update={update} />
      <CalcButton buttonVal={3} update={update} />
      <OpButton operator="+" setOp={setOp} />
      <br />
      <CalcButton buttonVal={4} update={update} />
      <CalcButton buttonVal={5} update={update} />
      <CalcButton buttonVal={6} update={update} />
      <OpButton operator="-" setOp={setOp} />
      <br />
      <CalcButton buttonVal={7} update={update} />
      <CalcButton buttonVal={8} update={update} />
      <CalcButton buttonVal={9} update={update} />
      <OpButton operator="*" setOp={setOp} />
      <br />
      <ClearButton buttonVal="c" calc={calc} />
      <CalcButton buttonVal={0} update={update} />
      <EqButton
        buttonVal="="
        whichOp={op}
        previous={prevVal}
        next={nextVal}
        calc={calc}
      />
      <OpButton operator="/" setOp={setOp} />
      {op}
      {prevVal}
      <br />

      {ansDisplay}
    </>
  );
}
