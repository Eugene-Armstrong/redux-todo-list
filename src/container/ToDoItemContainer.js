import { connect } from "react-redux";
import ToDoItem from "../component/TodoItem";
import todosAPI from '../api/TodoResourseAPI';

const mapStateToProps = (state, ownProps) => ({
  status: "read"
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeStatusHandler: (viewId, status) => {
    todosAPI.toggleActive(viewId, status, dispatch);
  }

});
export default connect(mapStateToProps, mapDispatchToProps)(ToDoItem);
