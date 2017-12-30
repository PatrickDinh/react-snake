import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { StoreState } from './types/index';
import TodoList from './components/TodoList/TodoListContainer';
import { Provider } from 'react-redux';
import { todoListReducer } from './components/TodoList/TodoListReducer';
import TodoModel from './models/TodoModel';
import thunk from 'redux-thunk';
import * as moment from 'moment';

const initialStage = {
  todoList: [
    {
      ...(new TodoModel(1, 'Learn React')),
      shown: true,
      createdTime: moment().toDate()
    }
  ]
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