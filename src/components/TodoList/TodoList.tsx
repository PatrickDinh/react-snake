import Todo from '../Todo/Todo';
import * as React from 'react';
import TodoModel from "../../models/TodoModel";
import { AddTodo } from "../AddTodo/AddTodo";

export interface StateProps {
  todoList: TodoModel[];
}

export interface DispatchProps {
  onAddTodo: (text: string) => void;
  onTodoStatusUpdated: (id: number, completed: boolean) => void;
}

class TodoList extends React.Component<StateProps & DispatchProps, object> {
  render() {
    const { todoList, onAddTodo, onTodoStatusUpdated } = this.props;

    return (
      <div className="todoList">
        <div>
          {todoList.map(todo =>
            <Todo key={todo.id} theTodo={todo} onTodoStatusUpdated={onTodoStatusUpdated}/>
          )}
        </div>
        <AddTodo onAddTodo={onAddTodo}/>
      </div>
    );
  }
}

export default TodoList;