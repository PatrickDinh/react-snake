import * as React from 'react';
import './Todo.css';
import TodoModel from "../../models/TodoModel";

export interface Props {
  theTodo: TodoModel;
  onTodoStatusUpdated: (id: number, completed: boolean) => void;
}

export interface State {
  completed: boolean;
  id: number;
  idString: string;
}

export default class Todo extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    
    this.state = {
      completed: !!props.theTodo.completed,
      id: props.theTodo.id,
      idString: props.theTodo.id.toString()
    }
  }

  onCheckboxChanged(e:any) {
    this.setState({...this.state, completed: !this.state.completed});
    this.props.onTodoStatusUpdated(this.state.id, e.target.checked);
  }

  render() {
    const { theTodo } = this.props;

    return (
      <div className="todo">
        <input type="checkbox" 
          id={this.state.idString}
          checked={this.state.completed}
          onChange={this.onCheckboxChanged.bind(this)}/>
        <label htmlFor={this.state.idString}>
          <span>{theTodo.name}</span>
        </label>
      </div>
    );
  }
} 