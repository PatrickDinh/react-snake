import * as constants from '../constants';
import TodoModel from '../models/TodoModel';
import { StoreState } from '../types/index';
import { Dispatch } from 'react-redux';

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

export type BlahAction<T> = (dispatch: Dispatch<TodoActions>, getState: () => StoreState) => Promise<T>;

export const onAddTodoBlah = (name: string): BlahAction<TodoModel> => {
  return(dispatch: Dispatch<TodoActions>, getState: () => StoreState) => {
    const todo = new TodoModel(getState().todoList.length, name);
    dispatch(addTodo(todo));
    return Promise.resolve(todo);
  };
};

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