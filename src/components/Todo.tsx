import * as React from 'react';
import './Todo.css';
import TodoModel from "../models/TodoModel";

export interface Props {
  theTodo: TodoModel;
  onTodoStatusUpdated: (id: number, completed: boolean) => void;
}

export interface State {
  completed: boolean;
  todoId: number;
}

export default class Todo extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    
    this.state = {
      completed: props.theTodo.completed,
      todoId: props.theTodo.id
    }
  }

  onCheckboxChanged(e:any) {
    if (!!e.target.checked !== this.state.completed) {
      this.setState({...this.state, completed: !this.state.completed});
      this.props.onTodoStatusUpdated(this.state.todoId, e.target.checked);
    }
  }

  render() {
    const { theTodo } = this.props;

    return (
      <div className="todo">
        <input type="checkbox" id={this.state.todoId.toString()} checked={this.state.completed} onChange={this.onCheckboxChanged.bind(this)}/>
        <label htmlFor={this.state.todoId.toString()}>{theTodo.name}</label>
      </div>
    );
  }
}