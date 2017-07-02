import TodoList from '../components/TodoList';
import { connect } from "react-redux";
import { StoreState } from "../types/index";

export function mapStateToProps({ todos }: StoreState) {
  return { todos };
}

export function mapDispatchToProps() {

}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);