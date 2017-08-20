import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { StoreState } from './types/index';
import TodoList from './containers/TodoListContainer';
import { Provider } from 'react-redux';
import { todoListReducer } from './reducers/TodoListReducer';
import TodoModel from './models/TodoModel';

const initialStage = {
  todoList: [ new TodoModel(1, 'Learn React') ]
};

const store = createStore<StoreState>(todoListReducer, initialStage);

ReactDOM.render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  document.getElementById('root') as HTMLElement
);