import { useCallback, useEffect, useState } from "react";

const UseCallback = () => {
  const [hardNumber, setHardNumber] = useState(0);

  const hardCalculate = useCallback(() => {
    console.log(`hardNumber : ${hardNumber}`);
    return;
  }, [hardNumber]);

  useEffect(() => {
    console.log("hardCalculate 함수가 재생성되었습니다.");
  }, [hardCalculate]);
  return (
    <div>
      <p>hardNumber : {hardNumber}</p>

      <button onClick={() => setHardNumber((prev) => prev + 1)}>
        hardNumber
      </button>
      <button onClick={hardCalculate}>Now State</button>
    </div>
  );
};

export default UseCallback;
