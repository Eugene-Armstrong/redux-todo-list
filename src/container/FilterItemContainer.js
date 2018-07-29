import { connect } from "react-redux";
import FilterItem from "../component/FilterItem";
import todosAPI from '../api/TodoResourseAPI'

const mapStateToProps = (state, ownProps) => ({
  todos: state.todos,
  statusOfList: state.statusOfList
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  filterHandler: statusOfList => {
    todosAPI.filerByStatus(statusOfList, dispatch);
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(FilterItem);