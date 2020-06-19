import React from "react";
import { Todo, TodoState } from "../../reducers/todoReducer";
import TodoRow from "./component/TodoRow";
import { connect } from "react-redux";
import { addTodo, toggleTodo, ActionType } from "../../actions";
import { Dispatch } from "redux";

type StateProps = {
  todos: Todo[];
};

type DispatchProps = {
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
};

type Props = StateProps & DispatchProps;

const TodoList: React.FC<Props> = ({ todos, addTodo, toggleTodo }) => {
  return (
    <div className="TodoList">
      {todos.length > 0 && (
        <div className="todos">
          {todos.map((todo) => (
            <TodoRow todo={todo} />
          ))}
        </div>
      )}
      <div
        onClick={() => {
          addTodo("hoge");
        }}
      >
        追加
      </div>
    </div>
  );
};

const mapStateToProps = (state: TodoState): StateProps => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch: Dispatch<ActionType>): DispatchProps => ({
  addTodo: (text: string) => dispatch(addTodo(text)),
  toggleTodo: (id: number) => dispatch(toggleTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
