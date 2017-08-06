import { TodoActions } from '../actions';
import { StoreState } from '../types/index';
import * as constants from '../constants/index';
import TodoModel from "../models/TodoModel";

function addNewTodo(state: StoreState, name: string): StoreState {
  // TODO: come up with a better way to create new state as object.assign returns object
  const newTodo = new TodoModel(state.todoList.length + 1, name);
  return Object.assign({}, state, { todoList: [...state.todoList, newTodo] });
}

function updateTodoStatus(state: StoreState, id: number, completed: boolean): StoreState {
  let todo = state.todoList.find(t => t.id === id);
  if (todo) todo.completed = completed;
  // TODO: come up with a better way to create new state as object.assign returns object
  return Object.assign({}, state, { todoList: [...state.todoList] });
}

export function todoListReducer(state: StoreState, action: TodoActions): StoreState {
  switch (action.type) {
    case constants.ADD_TODO:
      return addNewTodo(state, action.value);
    case constants.UPDATE_TODO_STATUS:
      return updateTodoStatus(state, action.id, action.completed);
  }

  return state;
}