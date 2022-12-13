import { useState } from "react";
import ReactMemo_Child from "./ReactMemo_Child";

const dataArray = [
  {
    id: 1,
    name: "A",
  },
  {
    id: 2,
    name: "B",
  },

  {
    id: 3,
    name: "C",
  },

  {
    id: 4,
    name: "D",
  },

  {
    id: 5,
    name: "E",
  },

  {
    id: 6,
    name: "F",
  },
];

const ReactMemo_Parent = () => {
  const [comments, setComments] = useState(dataArray);
  return (
    <div>
      {comments.map((comment) => (
        <ReactMemo_Child key={comment.id} name={comment.name} />
      ))}
      <button
        onClick={() => {
          setComments((prev) => [
            ...prev,
            {
              id: prev.length + 1,
              name: prev.length + 1 + "",
            },
          ]);
        }}
      >
        ADD DATA
      </button>
    </div>
  );
};

export default ReactMemo_Parent;
