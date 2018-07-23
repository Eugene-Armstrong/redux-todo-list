import { connect } from "react-redux";
import FilterItem from "../component/FilterItem";
import { showFilterList } from "../actions/index";
import todosRemoteAPI from '../api/TodoRemoteAPI'

const mapStateToProps = (state, ownProps) => ({
  todos: state.todos,
  statusOfList: state.statusOfList
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  filterHandler: (todos, statusOfList) => {
    todosRemoteAPI.filerByStatus(statusOfList,todos=>{
      dispatch(showFilterList(todos, statusOfList))
    })

  }
});
export default connect(mapStateToProps, mapDispatchToProps)(FilterItem);