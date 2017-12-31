import Todo from '../Todo/Todo';
import * as React from 'react';
import TodoModel from '../../models/TodoModel';
import { AddTodo } from '../AddTodo/AddTodo';
import { TimeComparer } from '../../common/time-comparer';
import { SearchTodo } from '../SearchTodo/SearchTodo';

export interface StateProps {
  todoList: TodoModel[];
}

export interface DispatchProps {
  onAddTodo: (text: string) => void;
  onTodoStatusUpdated: (id: number, completed: boolean) => void;
}

export interface State {
  searchText: string;
}

class TodoList extends React.Component<StateProps & DispatchProps, State> {
  constructor() {
    super();

    this.state = {
      searchText: ''
    };

    this.onSearchTodo = this.onSearchTodo.bind(this);
  }

  onSearchTodo = (searchText: string): void => {
    this.setState({
      searchText: searchText
    });
  }

  render() {
    const { todoList, onAddTodo, onTodoStatusUpdated } = this.props;

    var filteredTodos: TodoModel[];
    if (this.state.searchText) {
      filteredTodos = todoList.filter(m => m.name.toLowerCase().indexOf(this.state.searchText) > -1);
    } else {
      filteredTodos = todoList;
    }

    const outStandingTodos = filteredTodos.filter(td => !td.completed)
      .sort((a, b) => TimeComparer(b.createdTime, a.createdTime));

    const doneTodos = filteredTodos.filter(td => td.completed)
      .sort((a, b) => TimeComparer(a.completedTime, b.completedTime));

    return (
      <div className="todoList">
        <SearchTodo onSearchTodo={this.onSearchTodo} />
        <h1>Outstanding</h1>
        <div>
          {outStandingTodos.map(todo =>
            <Todo key={todo.id} theTodo={todo} onTodoStatusUpdated={onTodoStatusUpdated} />
          )}
        </div>
        <AddTodo onAddTodo={onAddTodo} />
        <h1>Done</h1>
        <div>
          {doneTodos.map(todo =>
            <Todo key={todo.id} theTodo={todo} onTodoStatusUpdated={onTodoStatusUpdated} />
          )}
        </div>
      </div>
    );
  }
}

export default TodoList;