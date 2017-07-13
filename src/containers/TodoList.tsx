import TodoList from '../components/TodoList';
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import { StoreState } from '../types/index';
import { Dispatch } from "redux";

export function mapStateToProps({ todoList }: StoreState) {
  console.log(todoList);
  return { todoList };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
  return {
    onAddTodo: () => dispatch(actions.addTodo())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);