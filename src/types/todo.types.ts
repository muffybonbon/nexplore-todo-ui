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

/* Component */
export interface ITodoCreateProps {
  onCreate: (todo: ITodoCreate) => void;
  isLoading: boolean;
}
