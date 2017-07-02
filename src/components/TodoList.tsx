import Todo, { TodoObj } from "./Todo";
import * as React from 'react';

export interface Props {
  todoList: TodoObj[],
  onAddTodo?: () => void;
}

class TodoList extends React.Component<Props, object> {
  render() {
    const { todoList, onAddTodo } = this.props;

    return (
      <div className="todoList">
        <div>
          {todoList.map(todo =>
            <Todo theTodo={todo}></Todo>
          )}
        </div>
        <div>
          <button onClick={onAddTodo}>+</button>
        </div>
      </div>
    );
  }
}

export default TodoList;