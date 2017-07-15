import * as constants from '../constants';

export interface AddTodo {
  type: constants.ADD_TODO;
}

export type AddTodoAction = AddTodo;

export function addTodo(): AddTodo {
  return {
    type: constants.ADD_TODO
  }
}