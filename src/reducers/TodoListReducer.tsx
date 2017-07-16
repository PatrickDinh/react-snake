import { TodoActions } from '../actions';
import { StoreState } from '../types/index';
import * as constants from '../constants/index';
import TodoModel from "../models/TodoModel";

export function todoListReducer(state: StoreState, action: TodoActions): StoreState {
  switch (action.type) {
    case constants.ADD_TODO:
      const newTodo = new TodoModel(state.todoList.length + 1, action.value);
      return Object.assign({}, state, { todoList: [...state.todoList,  newTodo] });
    case constants.UPDATE_TODO_STATUS:
      let todo = state.todoList.find(t => t.id === action.id);
      if (todo) todo.completed = action.completed;
      return Object.assign({}, state, { todoList: [...state.todoList] });
  }

  return state;
}