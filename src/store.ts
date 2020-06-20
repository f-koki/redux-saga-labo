import { createStore } from "redux";
import { todoReducer, Todo } from "./reducers/todoReducer";

const initialState = {
  todos: [{ id: 1, text: "hoge" }],
};

export const sotre = createStore(todoReducer, initialState);
