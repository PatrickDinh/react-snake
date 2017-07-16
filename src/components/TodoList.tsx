import Todo, { TodoObj } from './Todo';
import * as React from 'react';
import { NewTodo } from "./NewTodo";

export interface StateProps {
  todoList: TodoObj[];
}

export interface DispatchProps {
  onAddTodo: () => void;
}

class TodoList extends React.Component<StateProps & DispatchProps, object> {
  render() {
    const { todoList, onAddTodo } = this.props;

    return (
      <div className="todoList">
        <div>
          {todoList.map(todo =>
            <Todo key={todo.id} theTodo={todo} />
          )}
        </div>
        <NewTodo />
      </div>
    );
  }
}

export default TodoList;