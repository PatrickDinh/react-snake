import * as React from 'react';
import './Todo.css';
import TodoModel from '../../models/TodoModel';

export interface Props {
  theTodo: TodoModel;
  onTodoStatusUpdated: (id: number, completed: boolean) => void;
}

export interface State {
  completed: boolean;
  id: number;
}

export default class Todo extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      completed: !!props.theTodo.completed,
      id: props.theTodo.id
    };

    this.onCheckboxChanged = this.onCheckboxChanged.bind(this);
  }

  onCheckboxChanged(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ ...this.state, completed: !this.state.completed });
    this.props.onTodoStatusUpdated(this.state.id, e.target.checked);
  }

  render() {
    const { theTodo } = this.props;

    return (
      <div className={`todo ${theTodo.shown ? 'shown' : 'hide'}`}>
        <input
          type="checkbox"
          id={this.state.id.toString()}
          checked={this.state.completed}
          onChange={this.onCheckboxChanged}
        />
        <label htmlFor={this.state.id.toString()}>
          <span>{theTodo.name}</span>
        </label>
      </div>
    );
  }
} 