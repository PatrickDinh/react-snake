import * as constants from '../constants';

export interface AddTodo {
  type: constants.ADD_TODO;
  value: string;
}

export type AddTodoAction = AddTodo;

export function addTodo(text: string): AddTodo {
  return {
    type: constants.ADD_TODO,
    value: text
  }
}