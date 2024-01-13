/* Data Structure */
export interface ITodo {
  id: number;
  title: string;
  is_done: boolean;
  created_at: Date;
  created_by: string;
  updated_at: Date;
}

export interface ITodoCreate {
  title: string;
}

export interface ITodoID {
  id: number;
}

export interface ITodoViewProps {
  data: ITodo[];
  onDeleteTodo: (id: number) => void;
  onUpdateTodoStatus: (id: number, isDone: boolean) => void;
}

/* Component */
export interface ITodoCreateProps {
  isLoading: boolean;
  onCreate: (todo: ITodoCreate) => void;
}

export interface ITodoItemProps {
  item: ITodo;
  onDeleteTodo: (id: number) => void;
  onUpdateTodoStatus: (id: number, isDone: boolean) => void;
}
