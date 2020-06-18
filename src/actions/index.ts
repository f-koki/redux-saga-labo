import { Todo } from "../reducers";

export enum TodoActionType {
  ADD = "TODO/ADD",
  TOGGLE = "TODO/TOGGLE",
}

// typeofで互換性を作っている！！
type AddTodo = {
  type: typeof TodoActionType.ADD;
  payload: {
    todo: Todo;
  };
};

export const addTodo = (todo: Todo): AddTodo => ({
  type: TodoActionType.ADD,
  payload: { todo },
});

type ToggleTodo = {
  type: typeof TodoActionType.TOGGLE;
  payload: {
    id: number;
  };
};

export const toggleTodo = (id: number): ToggleTodo => ({
  type: TodoActionType.TOGGLE,
  payload: { id },
});

export type ActionType = AddTodo | ToggleTodo;
