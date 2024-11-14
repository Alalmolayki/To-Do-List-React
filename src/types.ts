export type Category = 'Work' | 'Personal' | 'Study' | 'Health' | 'Leisure';

export interface Task {
  id: number;
  text: string;
  completed: boolean;
  category: Category;
  createdAt: Date;
}