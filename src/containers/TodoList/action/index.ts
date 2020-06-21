export enum TodoActionType {
  ADD = "TODO/ADD",
  TOGGLE = "TODO/TOGGLE",
}

// typeofで互換性を作っている！！
type AddTodo = {
  type: typeof TodoActionType.ADD;
  payload: {
    text: string;
  };
};

export const addTodo = (text: string): AddTodo => ({
  type: TodoActionType.ADD,
  payload: { text },
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
