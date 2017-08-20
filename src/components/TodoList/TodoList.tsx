import Todo from '../Todo/Todo';
import * as React from 'react';
import TodoModel from '../../models/TodoModel';
import { AddTodo } from '../AddTodo/AddTodo';

export interface StateProps {
  todoList: TodoModel[];
}

export interface DispatchProps {
  onAddTodo: (text: string) => void;
  onTodoStatusUpdated: (id: number, completed: boolean) => void;
  onTodoVisibilityUpdated: (id: number, shown: boolean) => void;
}

class TodoList extends React.Component<StateProps & DispatchProps, object> {
  constructor() {
    super();

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(name: string) {
    const {onAddTodo, onTodoVisibilityUpdated } = this.props;
    onAddTodo(name);
    setTimeout(() => onTodoVisibilityUpdated(2, true), 2000);
  }

  render() {
    const { todoList, onTodoStatusUpdated } = this.props;

    return (
      <div className="todoList">
        <div>
          {todoList.map(todo =>
            <Todo key={todo.id} theTodo={todo} onTodoStatusUpdated={onTodoStatusUpdated}/>
          )}
        </div>
        <AddTodo onAddTodo={this.addTodo}/>
      </div>
    );
  }
}

export default TodoList;