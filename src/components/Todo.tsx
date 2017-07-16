import * as React from 'react';
import TodoModel from "../models/TodoModel";

export interface Props {
  theTodo: TodoModel;
  onTodoStatusUpdated: (id: number, completed: boolean) => void;
}

export interface State {
  completed: boolean;
}

class Todo extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    
    this.state = {
      completed: props.theTodo.completed
    }
  }

  onCheckboxChanged(id: number, e:any) {
    if (!!e.target.checked !== this.state.completed) {
      this.setState(Object.assign({}, this.state, !this.state.completed));
      this.props.onTodoStatusUpdated(id, e.target.checked);
    }
  }

  render() {
    const { theTodo } = this.props;

    return (
      <div>
        <input type="checkbox" checked={this.state.completed} onChange={this.onCheckboxChanged.bind(this, theTodo.id)}/>
        {theTodo.name}
      </div>
    );
  }
}

export default Todo;