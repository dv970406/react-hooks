import React, { useReducer, useState } from "react";

const ACTION_TYPES = {
  deposit: "deposit",
  withdraw: "withdraw",
};

// 만약 이 state 변경 로직을 컴포넌트 내부에 작성했으면 가독성이 떨어질 수 있음
// 관리해야 하는 state 상태가 복잡한 경우 컴포넌트와 비즈니스 로직을 분리할 수 있는 것이 useReducer의 장점
const reducer = (state, action) => {
  console.log("Reducer가 하는 일 : ", state, action);
  switch (action.type) {
    case ACTION_TYPES.deposit:
      return state + action.payload;
    case ACTION_TYPES.withdraw:
      return state - action.payload;
    default:
      return state;
  }
};

const UseReducer = () => {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h2>은행</h2>
      <p>잔고 : {money}원</p>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        step="1000"
      />
      <button
        onClick={() =>
          dispatch({ type: ACTION_TYPES.deposit, payload: number })
        }
      >
        예금
      </button>
      <button
        onClick={() =>
          dispatch({ type: ACTION_TYPES.withdraw, payload: number })
        }
      >
        출금
      </button>
    </div>
  );
};

export default UseReducer;
