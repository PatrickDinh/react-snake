import * as React from 'react';

export interface Props {
  onAddTodo: (text: string) => void;
}

export interface State {
  text: string;
}

export class AddTodo extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      text: ''
    };

    this.handleSave = this.handleSave.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSave() {
    this.props.onAddTodo(this.state.text.trim());
    this.state = {
      text: ''
    };
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ text: e.target.value.trim() });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSave}>+</button>
      </div>
    );
  }
}