export type ITodo = {
  title: string;
  time: string;
};

export type ITodoResponse = {
  id?: string;
  title: string;
  time: string;
  status: string;
  createdAt: Date;
};
