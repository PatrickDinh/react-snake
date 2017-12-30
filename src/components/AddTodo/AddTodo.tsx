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
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleSave() {
    this.props.onAddTodo(this.state.text.trim());
    this.state = {
      text: ''
    };
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ text: e.target.value });
  }

  handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      this.handleSave();
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleSave}>+</button>
      </div>
    );
  }
}