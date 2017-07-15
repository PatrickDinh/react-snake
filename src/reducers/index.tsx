import { AddTodoAction } from '../actions';
import { StoreState } from '../types/index';
import { ADD_TODO } from '../constants/index';
import { TodoObj } from "../components/Todo";

export function addToDoReducer(state: StoreState, action: AddTodoAction): StoreState {
  switch (action.type) {
    case ADD_TODO:
      let newTodoList = state.todoList.slice(0);
      const newId = state.todoList.length + 1;
      newTodoList.push(new TodoObj(newId, `Learn another thing id = ${newId}`));

      return Object.assign({}, state, { todoList: newTodoList });
  }

  return state;
}