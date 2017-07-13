import Todo, { TodoObj } from './Todo';
import * as React from 'react';

export interface Props {
  todoList: TodoObj[];
  onAddTodo?: () => void;
}

function TodoList({ todoList, onAddTodo }: Props) {
  return (
    <div className="todoList">
        <div>
          {todoList.map(todo =>
            <Todo key="{todo.id}" theTodo={todo} />
          )}
        </div>
        <div>
          <button onClick={onAddTodo}>+</button>
        </div>
      </div>
  );
}

export default TodoList;