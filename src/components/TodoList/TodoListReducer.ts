import { TodoActions } from '../../actions';
import { StoreState } from '../../types/index';
import * as constants from '../../constants/index';
import TodoModel from '../../models/TodoModel';
import * as moment from 'moment';

type ActionOnTodoModel = (todo: TodoModel) => TodoModel;

function addNewTodo(state: StoreState, todo: TodoModel): StoreState {
  return {
    ...state,
    todoList: [...state.todoList, todo]
  };
}

function findAndUpdateTodoModel(state: StoreState, id: number, actionOnTodoModel: ActionOnTodoModel): StoreState {
  return {
    ...state,
    todoList: state.todoList.map(td => {
      if (td.id === id) {
        return actionOnTodoModel(td);
      }
      return td;
    })
  };
}

function completeTodo(state: StoreState, id: number): StoreState {
  return findAndUpdateTodoModel(state, id, (x: TodoModel) => ({
    ...x,
    completed: true,
    completedTime: moment().toDate()
  }));
}

function undoneTodo(state: StoreState, id: number): StoreState {
  return findAndUpdateTodoModel(state, id, (x: TodoModel) => ({
    ...x,
    completed: false,
    completedTime: new Date(2000, 0, 1)
  }));
}

function updateTodoStatus(state: StoreState, id: number, completed: boolean): StoreState {
  if (completed) {
    return completeTodo(state, id);
  }
  return undoneTodo(state, id);
}

function updateTodoVisibility(state: StoreState, id: number, shown: boolean): StoreState {
  return findAndUpdateTodoModel(state, id, (x: TodoModel) => ({
    ...x,
    shown
  }));
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
