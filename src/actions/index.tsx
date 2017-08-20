import * as constants from '../constants';
import TodoModel from '../models/TodoModel';

export interface AddTodo {
  type: constants.ADD_TODO;
  todo: TodoModel;
}

export interface UpdateTodoStatus {
  type: constants.UPDATE_TODO_STATUS;
  id: number;
  completed: boolean;
}

export interface UpdateToDoVisibility {
  type: constants.UPDATE_TODO_VISIBILITY;
  id: number;
  shown: boolean;
}

export type TodoActions = AddTodo 
  | UpdateTodoStatus
  | UpdateToDoVisibility;

export function addTodo(todo: TodoModel): AddTodo {
  return {
    type: constants.ADD_TODO,
    todo
  };
}

export function updateTodoStatus(id: number, completed: boolean): UpdateTodoStatus {
  return {
    type: constants.UPDATE_TODO_STATUS,
    id,
    completed
  };
}

export function updateToDoVisibility(id: number, shown: boolean): UpdateToDoVisibility {
  return {
    type: constants.UPDATE_TODO_VISIBILITY,
    id,
    shown
  };
}