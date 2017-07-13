import * as React from 'react';

export interface Props {
  theTodo: TodoObj;
}

class Todo extends React.Component<Props, object> {
  render() {
    const { theTodo } = this.props;

    return (
      <div>
        Todo: {theTodo.name}, completed {theTodo.completed}
      </div>
    );
  }
}

export class TodoObj {
  id: number;
  name: string;
  completed: boolean;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

export default Todo;