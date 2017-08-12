import TodoList, { DispatchProps } from '../components/TodoList/TodoList';
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import { StoreState } from '../types/index';
import { Dispatch } from "redux";

export function mapStateToProps(state: StoreState) {
  return { 
    todoList: state.todoList
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.TodoActions>): DispatchProps {
  return {
    onAddTodo: (text: string) => dispatch(actions.addTodo(text)),
    onTodoStatusUpdated: (id: number, completed: boolean) => dispatch(actions.updateTodoStatus(id, completed)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);