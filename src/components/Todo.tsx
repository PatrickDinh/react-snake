import * as React from 'react';

export interface Props {
  name: string;
  completed: boolean;
}

class Todo extends React.Component<Props, object> {
  render() {
    const { name } = this.props;

    return (
      <div>
        Todo: {name}
      </div>
    );
  }
}

export default Todo;