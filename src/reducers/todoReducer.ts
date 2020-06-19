import { Reducer } from "redux";
import { TodoActionType, ActionType } from "../actions";

export type Todo = {
  text: string;
  id: number;
};

export type TodoState = {
  todos: Todo[];
};

const initialState: TodoState = { todos: [] };

const calculateId = (todos: Todo[]): number => {
  // TODO つくる
  return 3;
};

export const todoReducer: Reducer<TodoState, ActionType> = (
  state: TodoState = initialState,
  action: ActionType
): TodoState => {
  switch (action.type) {
    case TodoActionType.ADD: {
      const nextTodos = [
        ...state.todos,
        { text: action.payload.text, id: calculateId(state.todos) },
      ];
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
