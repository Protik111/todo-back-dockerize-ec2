export type ITodo = {
  title: string;
  time: string;
};

export type ITodoResponse = {
  id: number;
  title: string;
  time: string;
  status: string;
  createdAt: Date;
};
