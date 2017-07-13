import { AddTodoAction } from '../actions';
import { StoreState } from '../types/index';
import { ADD_TODO } from '../constants/index';
import { TodoObj } from "../components/Todo";

export function addToDo(state: StoreState, action: AddTodoAction): StoreState {
  switch (action.type) {
    case ADD_TODO:
      let newTodoList = state.todoList;
      newTodoList.push(new TodoObj(2, 'Learn Angular2'));
      return Object.assign({}, state, { todoList: newTodoList });
  }
  return state;
}