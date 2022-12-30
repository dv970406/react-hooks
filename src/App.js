import "./App.css";
import ReactMemo_Parent from "./memoization/ReactMemo_Parent";
import UseCallback from "./memoization/UseCallback";
import UseMemo from "./memoization/UseMemo";
import UseMemo_Object from "./memoization/UseMemo_Object";
import UseContext from "./context/UseContext_Parent";
import { ThemeContext } from "./context/context";
import { useState } from "react";
import UseContext_Parent from "./context/UseContext_Parent";
import UseReducer from "./reducer/UseReducer";

function App() {
  // useContext 용도
  //const [isDark, setIsDark] = useState(false);

  return (
    // <ThemeContext.Provider value={{ isDark, setIsDark }}>
    <UseReducer />
    // </ThemeContext.Provider>
  );
}

export default App;
