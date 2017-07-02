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
  name: string;
  completed: boolean;

  constructor(name: string) {
    this.name = name;
  }
}

export default Todo;