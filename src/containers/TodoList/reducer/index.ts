import { Reducer } from "redux";
import { TodoActionType, ActionType } from "../action";

export type TodoState = {
  todos: string[];
};

const initialState: TodoState = { todos: [] };

export const todoReducer: Reducer<TodoState, ActionType> = (
  state = initialState,
  action: ActionType
): TodoState => {
  switch (action.type) {
    case TodoActionType.ADD: {
      return {
        ...state,
        todos: [...state.todos, action.payload.text],
      };
    }
  }
};
