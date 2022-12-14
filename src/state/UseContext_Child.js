import React, { useContext } from "react";
import { ThemeContext } from "./context";

const UseContext_Child = () => {
  const { setIsDark } = useContext(ThemeContext);

  // useContext의 리렌더링 문제 체크 용도의 콘솔로그
  console.log(`I'm Child`);

  return <button onClick={() => setIsDark((prev) => !prev)}>Dark</button>;
};

export default UseContext_Child;
