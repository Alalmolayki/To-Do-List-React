export type Category = 'Work' | 'Personal' | 'Study' | 'Exercise' | 'Leisure';

export interface Task {
  id: string;
  text: string;
  completed: boolean;
  category: Category;
}