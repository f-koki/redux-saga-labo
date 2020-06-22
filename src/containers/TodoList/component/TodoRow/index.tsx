import React from "react";

type Props = {
  todo: string;
};

const TodoRow: React.FC<Props> = ({ todo }) => (
  <div className="Todo">
    <div className="todo-text">{todo}</div>
    {/* TODO: checkboxをクリックしたらtodo削除 */}
    <div className="toggle-button" onClick={() => {}}></div>
  </div>
);

export default TodoRow;
