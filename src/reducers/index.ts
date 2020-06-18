import { Reducer } from "redux";
import { TodoActionType, ActionType } from "../actions";

export type Todo = {
  text: string;
  id: number;
};

type TodoState = {
  todos: Todo[];
};

const initialState: TodoState = { todos: [] };

// TODO: なぜエラーを吐くのか
export const reducer: Reducer<TodoState, ActionType> = (
  state: TodoState = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case TodoActionType.ADD:
      return {
        ...state,
        todos: state.todos.push(action.payload.todo),
      };
    case TodoActionType.TOGGLE:
      return {
        ...state,
      };
  }
};
