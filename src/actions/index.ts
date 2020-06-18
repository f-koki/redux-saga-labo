export enum TodoActionType {
  ADD = "TODO/ADD",
  TOGGLE = "TODO/TOGGLE",
}

export const addTodo = (text: string, id: number) => ({
  type: TodoActionType.ADD,
  text,
  id,
});

export const toggleTodo = (id: number) => ({
  type: TodoActionType.TOGGLE,
  id,
});
