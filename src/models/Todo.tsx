export interface Todo {
  id: string;
  description: string;
  title: string;
  completed: boolean;
}

export interface Popup {
  isOpenAdd: boolean;
  isOpenDelete: boolean;
  isOpenEdit: boolean;
  selectedTodoId: string | null;
}
