import { createStore } from "redux";
import { todoReducer } from "./containers/TodoList/reducer";

export type RootState = {
  todos: string[];
};

const initialState: RootState = {
  todos: [],
};

export const sotre = createStore(todoReducer, initialState);

export type AllState = ReturnType<typeof sotre.getState>;
