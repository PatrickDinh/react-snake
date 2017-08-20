import { TodoActions } from '../actions';
import { StoreState } from '../types/index';
import * as constants from '../constants/index';
import TodoModel from '../models/TodoModel';

type ActionOnTodoModel = (todo: TodoModel) => void;

function addNewTodo(state: StoreState, todo: TodoModel): StoreState {
  return {
    ...state,
    todoList: [...state.todoList, todo]
  };
}

function findAndUpdateTodoModel(state: StoreState, id: number, actionOnTodoModel: ActionOnTodoModel): StoreState {
  let todo = state.todoList.find(t => t.id === id);
  if (!todo) {
    throw new Error('Todo cannot be found');
  }

  actionOnTodoModel(todo);

  return {
    ...state,
    todoList: [...state.todoList]
  };
}

function updateTodoStatus(state: StoreState, id: number, completed: boolean): StoreState {
  return findAndUpdateTodoModel(state, id, (x: TodoModel) => { x.completed = completed; });
}

function updateTodoVisibility(state: StoreState, id: number, shown: boolean): StoreState {
  return findAndUpdateTodoModel(state, id, (x: TodoModel) => { x.shown = shown; });
}

export function todoListReducer(state: StoreState, action: TodoActions): StoreState {
  switch (action.type) {
    case constants.ADD_TODO:
      return addNewTodo(state, action.todo);
    case constants.UPDATE_TODO_STATUS:
      return updateTodoStatus(state, action.id, action.completed);
    case constants.UPDATE_TODO_VISIBILITY:
      return updateTodoVisibility(state, action.id, action.shown);
    default:
      return state;
  }
}