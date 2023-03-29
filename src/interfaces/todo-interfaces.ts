export type TFetchSingleTodoPayload = {
  id: number;
};

export type TTodo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
