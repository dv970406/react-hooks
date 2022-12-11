import { useEffect, useMemo, useState } from "react";

const hardCalculate = (number) => {
  console.log("어려운 계산");
  for (let i = 0; i < 999999, i++; ) {}
  return number + 1;
};
const easyCalculate = (number) => {
  console.log("쉬운 계산");
  return number + 1;
};

const UseMemo_Object = () => {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  const location = useMemo(() => {
    return {
      country: isKorea ? "한국" : "외국",
    };
  }, [isKorea]);

  useEffect(() => {
    console.log("location이 변경되었습니다.");
  }, [location]);

  return (
    <div>
      <p>숫자 : {number}</p>
      <p>나라 : {location.country}</p>
      <button onClick={() => setNumber((prev) => prev + 1)}>숫자증가</button>
      <button onClick={() => setIsKorea((prev) => !prev)}>국적변경</button>
    </div>
  );
};

export default UseMemo_Object;
