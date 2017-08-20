import TodoList, { DispatchProps } from '../components/TodoList/TodoList';
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import { StoreState } from '../types/index';
import { Dispatch } from 'redux';

export function mapStateToProps(state: StoreState) {
  return { 
    todoList: state.todoList
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.TodoActions>): DispatchProps {
  return {
    onAddTodo: (name: string) => dispatch(actions.onAddTodoBlah(name)),
    onTodoStatusUpdated: (id: number, completed: boolean) => dispatch(actions.updateTodoStatus(id, completed)),
    onTodoVisibilityUpdated: (id: number, shown: boolean) => dispatch(actions.updateToDoVisibility(id, shown)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);