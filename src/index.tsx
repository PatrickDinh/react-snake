import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { StoreState } from './types/index';
import TodoList from './containers/TodoListContainer';
import { Provider } from 'react-redux';
import { todoListReducer } from './reducers/TodoListReducer';
import TodoModel from './models/TodoModel';
import thunk from 'redux-thunk';

const initialStage = {
  todoList: [ new TodoModel(1, 'Learn React', true) ]
};

const store = createStore<StoreState>(todoListReducer,
                                      initialStage,
                                      applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  document.getElementById('root') as HTMLElement
);