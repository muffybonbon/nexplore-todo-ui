/* Data Structure */
export interface ITodo {
  id: number;
  title: string;
  is_done: boolean;
  created_at: Date;
  created_by: string;
  updated_at: Date;
  updated_by: string;
}

export interface ITodoCreate {
  title: string;
}

export interface ITodoUpdate {
  title: string;
  is_done: boolean;
}

export interface ITodoID {
  id: number;
}

export interface ITodoViewProps {
  data: ITodo[];
  onDeleteTodo: (id: number) => void;
  onUpdateTodo: (id: number, todo: ITodoUpdate) => void;
  onUpdateTodoStatus: (id: number, is_done: boolean) => void;
}

/* Component */
export interface ITodoCreateProps {
  isLoading: boolean;
  onCreate: (todo: ITodoCreate) => void;
}

export interface ITodoItemProps {
  item: ITodo;
  onDeleteTodo: (id: number) => void;
  onUpdateTodo: (id: number, todo: ITodoUpdate) => void;
  onUpdateTodoStatus: (id: number, isDone: boolean) => void;
}
