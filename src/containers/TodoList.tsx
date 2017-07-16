import TodoList, { DispatchProps } from '../components/TodoList';
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import { StoreState } from '../types/index';
import { Dispatch } from "redux";

export function mapStateToProps(state: StoreState) {
  return { 
    todoList: state.todoList
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.AddTodoAction>): DispatchProps {
  return {
    onAddTodo: (text: string) => dispatch(actions.addTodo(text))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);