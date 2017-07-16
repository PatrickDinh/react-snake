import { AddTodoAction } from '../actions';
import { StoreState } from '../types/index';
import { ADD_TODO } from '../constants/index';
import { TodoObj } from "../components/Todo";

export function todoListReducer(state: StoreState, action: AddTodoAction): StoreState {
  switch (action.type) {
    case ADD_TODO:
      const newId = state.todoList.length + 1;
      const newTodo = new TodoObj(newId, action.value);

      return Object.assign({}, state, { todoList: [...state.todoList,  newTodo] });
  }

  return state;
}