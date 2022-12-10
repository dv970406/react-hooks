import { useMemo, useState } from "react";

const hardCalculate = (number) => {
  console.log("어려운 계산");
  for (let i = 0; i < 999999, i++; ) {}
  return number + 1;
};
const easyCalculate = (number) => {
  console.log("쉬운 계산");
  return number + 1;
};

const UseMemo = () => {
  const [hardNumber, setHardNumber] = useState(0);
  const [easyNumber, setEasyNumber] = useState(0);

  const hardSum = useMemo(() => hardCalculate(hardNumber), [hardNumber]);
  const easySum = easyCalculate(easyNumber);

  return (
    <div>
      <p>hardNumber : {hardSum}</p>
      <p>easyNumber : {easySum}</p>
      <button onClick={() => setHardNumber((prev) => prev + 1)}>
        hardNumber
      </button>
      <button onClick={() => setEasyNumber((prev) => prev + 1)}>
        easyNumber
      </button>
    </div>
  );
};

export default UseMemo;
