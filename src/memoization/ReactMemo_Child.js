import React from "react";

const ReactMemo_Child = ({ name }) => {
  console.log(name);
  return <div>{name}</div>;
};

export default React.memo(ReactMemo_Child);
