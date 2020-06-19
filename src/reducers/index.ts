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

export const reducer: Reducer<TodoState, ActionType> = (
  state: TodoState = initialState,
  action: ActionType
): TodoState => {
  switch (action.type) {
    case TodoActionType.ADD: {
      const nextTodos = [...state.todos, action.payload.todo];
      return {
        ...state,
        todos: nextTodos,
      };
    }

    case TodoActionType.TOGGLE:
      return {
        ...state,
      };
  }
};
