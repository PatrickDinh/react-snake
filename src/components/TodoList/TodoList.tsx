import Todo from '../Todo/Todo';
import * as React from 'react';
import TodoModel from '../../models/TodoModel';
import { AddTodo } from '../AddTodo/AddTodo';
import { TimeComparer } from '../../common/time-comparer';

export interface StateProps {
  todoList: TodoModel[];
}

export interface DispatchProps {
  onAddTodo: (text: string) => void;
  onTodoStatusUpdated: (id: number, completed: boolean) => void;
}

class TodoList extends React.Component<StateProps & DispatchProps, object> {
  constructor() {
    super();
  }

  render() {
    const { todoList, onAddTodo, onTodoStatusUpdated } = this.props;

    const outStandingTodos = todoList.filter(td => !td.completed)
      .sort((a, b) => a.id - b.id);

    const doneTodos = todoList.filter(td => td.completed)
      .sort((a, b) => TimeComparer(a.completedTime, b.completedTime));

    return (
      <div className="todoList">
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