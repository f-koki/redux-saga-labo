import { createStore } from "redux";
import { todoReducer, Todo } from "./containers/TodoList/reducer";

export type RootState = {
  todos: Todo[];
};

const initialState: RootState = {
  todos: [{ id: 1, text: "hoge" }],
};

export const sotre = createStore(todoReducer, initialState);

export type AllState = ReturnType<typeof sotre.getState>;
