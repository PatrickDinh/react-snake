import * as React from 'react';

export interface Props {
    onSearchTodo: (name: string) => void;
}

export class SearchTodo extends React.Component<Props, object> {
    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const searchText = e.target.value;

        if (searchText.length >= 3) {
            this.props.onSearchTodo(searchText);
        } else {
            this.props.onSearchTodo('');
        }
    }

    render() {
        return (
            <div>
                <label>Search: </label>
                <input
                    type="text"
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}