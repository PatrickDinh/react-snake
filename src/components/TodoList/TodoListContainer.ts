import TodoList, { DispatchProps } from '../../components/TodoList/TodoList';
import * as actions from '../../actions/index';
import { connect } from 'react-redux';
import { StoreState } from '../../types/index';
import { Dispatch } from 'redux';
import TodoModel from '../../models/TodoModel';
import { ThunkAction } from 'redux-thunk';
import { TimeOut } from '../../common/time-out';
import * as moment from 'moment';

export function mapStateToProps(state: StoreState) {
  return { 
    todoList: state.todoList
  };
}

const getNewTodoModel = (name: string): ThunkAction<Promise<TodoModel>, StoreState, null> => {
  return (dispatch: Dispatch<StoreState>, getState: () => StoreState) => {
    let model = new TodoModel(getState().todoList.length + 1, name);
    model.createdTime = moment().toDate();

    return Promise.resolve(model);
  };
};

const addTodoWithAnimation = async (dispatch: Dispatch<StoreState>, name: string) => {
  let model = await dispatch(getNewTodoModel(name));
  await dispatch(actions.addTodo(model));
  await TimeOut(10);
  dispatch(actions.updateToDoVisibility(model.id, true));
};

const updateTodoStatusWithAnimation = async (dispatch: Dispatch<StoreState>, id: number, completed: boolean) => {
  dispatch(actions.updateToDoVisibility(id, false));
  await TimeOut(300);
  dispatch(actions.updateTodoStatus(id, completed));
  await TimeOut(30);
  dispatch(actions.updateToDoVisibility(id, true));
};

export function mapDispatchToProps(dispatch: Dispatch<StoreState>): DispatchProps {
  return {
    onAddTodo: (name: string) => addTodoWithAnimation(dispatch, name),
    onTodoStatusUpdated: (id: number, completed: boolean) => updateTodoStatusWithAnimation(dispatch, id, completed)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);