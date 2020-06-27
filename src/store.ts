import { createStore, Store } from "redux";
import { todoReducer, TodoState } from "./containers/TodoList/reducer";

export type RootState = {
  todoState: TodoState;
};

const initialState: any = {
  todoState: {
    todos: [],
  },
};

export const store: Store = createStore(todoReducer, initialState);

export type AllState = ReturnType<typeof store.getState>;
