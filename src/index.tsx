import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { StoreState } from './types/index';
import TodoList from './containers/TodoList';
import { Provider } from 'react-redux';
import { TodoObj } from './components/Todo';
import { todoListReducer } from "./reducers/TodoListReducer";

const store = createStore<StoreState>(todoListReducer, {
  todoList: [ new TodoObj(1, 'Learn React') ]
});

ReactDOM.render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  document.getElementById('root') as HTMLElement
);