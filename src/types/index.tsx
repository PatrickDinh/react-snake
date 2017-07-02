import Todo from '../components/Todo';

export interface StoreState {
  languageName: string;
  enthusiasmLevel: number;
  todoList: Todo[];
}