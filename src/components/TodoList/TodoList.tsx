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
}

const timeComparer = (t1: Date, t2: Date): number => {
  return t2.getTime() - t1.getTime();
};

class TodoList extends React.Component<StateProps & DispatchProps, object> {
  constructor() {
    super();
  }

  render() {
    const { todoList, onAddTodo, onTodoStatusUpdated } = this.props;
    const outStandingTodos = todoList.filter(td => !td.completed).sort((a, b) => a.id - b.id);
    const doneTodos = todoList.filter(td => td.completed).sort((a, b) => timeComparer(a.completedTime, b.completedTime));

    return (
      <div className="todoList">
        <h1>Outstanding</h1>
        <div>
          {outStandingTodos.map(todo =>
            <Todo key={todo.id} theTodo={todo} onTodoStatusUpdated={onTodoStatusUpdated}/>
          )}
        </div>
        <AddTodo onAddTodo={onAddTodo}/>
        <h1>Done</h1>
        <div>
          {doneTodos.map(todo =>
            <Todo key={todo.id} theTodo={todo} onTodoStatusUpdated={onTodoStatusUpdated}/>
          )}
        </div>
      </div>
    );
  }
}

export default TodoList;