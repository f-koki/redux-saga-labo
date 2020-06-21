import React from "react";
import { Todo } from "../../reducer";

type Props = {
  todo: Todo;
};

const TodoRow: React.FC<Props> = ({ todo }) => (
  <div className="Todo">
    <div className="todo-text">{todo.text}</div>
    {/* TODO: checkboxをクリックしたらtodo削除 */}
    <div className="toggle-button" onClick={() => {}}></div>
  </div>
);

export default TodoRow;
