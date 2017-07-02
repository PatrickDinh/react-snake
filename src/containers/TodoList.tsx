import TodoList from '../components/TodoList';
import { connect } from "react-redux";
import { StoreState } from "../types/index";

export function mapStateToProps({ todoList }: StoreState) {
  return { todoList };
}

export function mapDispatchToProps() {

}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);