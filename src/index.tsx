import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { addToDoReducer } from './reducers/index';
import { StoreState } from './types/index';
import TodoList from './containers/TodoList';
import { Provider } from 'react-redux';
import { TodoObj } from './components/Todo';

const store = createStore<StoreState>(addToDoReducer, {
  todoList: [ new TodoObj(1, 'Learn React') ]
});

ReactDOM.render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  document.getElementById('root') as HTMLElement
);