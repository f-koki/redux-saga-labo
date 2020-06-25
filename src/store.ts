import { createStore, Store, combineReducers } from "redux";
import { todoReducer, TodoState } from "./containers/TodoList/reducer";

export type RootState = {
  todoState: TodoState;
};

const initialState: RootState = {
  todoState: {
    todos: [],
  },
};

export const store: Store = createStore(todoReducer, initialState);

export type AllState = ReturnType<typeof store.getState>;
