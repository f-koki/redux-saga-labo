import React from "react";

type Props = {
  todo: string;
};

const TodoRow: React.FC<Props> = ({ todo }) => (
  <div className="Todo">
    <div className="todo-text">{todo}</div>
    <div className="toggle-button" onClick={() => {}}></div>
  </div>
);

export default TodoRow;
