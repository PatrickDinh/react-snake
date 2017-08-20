import * as constants from '../constants';

export interface AddTodo {
  type: constants.ADD_TODO;
  value: string;
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

export function addTodo(text: string): AddTodo {
  return {
    type: constants.ADD_TODO,
    value: text
  };
}

export function updateTodoStatus(id: number, completed: boolean): UpdateTodoStatus {
  return {
    type: constants.UPDATE_TODO_STATUS,
    id: id,
    completed: completed
  };
}

export function updateToDoVisibility(id: number, shown: boolean): UpdateToDoVisibility {
  return {
    type: constants.UPDATE_TODO_VISIBILITY,
    id: id,
    shown: shown
  };
}