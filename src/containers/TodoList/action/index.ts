export enum TodoActionType {
  ADD = "TODO/ADD",
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

export type ActionType = AddTodo;
