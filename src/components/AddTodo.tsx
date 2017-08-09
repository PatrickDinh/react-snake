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
    }

    handleSave() {
        this.props.onAddTodo(this.state.text);
        this.state = {
            text: ''
        };
    }

    handleChange(e: any) {
        this.setState({ text: e.target.value.trim() });
    }

    render() {
        return (
            <div>
                <input type="text" 
                    value={this.state.text} 
                    onChange={this.handleChange.bind(this)} />
                <button onClick={this.handleSave.bind(this)}>+</button>
            </div>
        );
    }
}