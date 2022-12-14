import React, { useContext } from "react";
import { ThemeContext } from "./context";
import UseContext_Child from "./UseContext_Child";

const UseContext_Parent = () => {
  const { isDark } = useContext(ThemeContext);
  console.log(`I'm Parent`);

  return (
    <div style={{ backgroundColor: isDark ? "black" : "lightgray" }}>
      <div style={{ color: isDark ? "yellow" : "red" }}>UseContext</div>
      <UseContext_Child />
    </div>
  );
};

export default UseContext_Parent;
