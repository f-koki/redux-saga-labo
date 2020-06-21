import React from "react";
import TodoRow from "./component/TodoRow";
import { connect } from "react-redux";
import { addTodo, toggleTodo, ActionType } from "./action";
import { Dispatch } from "redux";
import { RootState } from "../../store";
import { Todo } from "./reducer";

type StateProps = {
  todos: Todo[];
};

type DispatchProps = {
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
};

type Props = RootState & DispatchProps;

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

// TODO: errorになるのを直す
const mapStateToProps = (state: any): RootState => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch: Dispatch<ActionType>): DispatchProps => ({
  addTodo: (text: string) => dispatch(addTodo(text)),
  toggleTodo: (id: number) => dispatch(toggleTodo(id)),
});

export default connect<StateProps, DispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
