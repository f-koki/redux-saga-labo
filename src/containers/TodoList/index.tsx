import React from "react";
import TodoRow from "./component/TodoRow";
import { connect } from "react-redux";
import { addTodo, ActionType } from "./action";
import { Dispatch } from "redux";
import { RootState } from "../../store";

type StateProps = {
  state: RootState;
};

type DispatchProps = {
  addTodo: (text: string) => void;
};

type Props = StateProps & DispatchProps;

const TodoList: React.FC<Props> = ({ state, addTodo }) => {
  const todos =
    state && state.todoState && state.todoState.todos
      ? state.todoState.todos
      : [];
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

const mapStateToProps = (state: RootState) => ({
  state,
});

const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => ({
  addTodo: (text: string) => dispatch(addTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
