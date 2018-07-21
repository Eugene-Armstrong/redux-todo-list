import { connect } from "react-redux";
import ToDoItem from "../component/TodoItem";
import { changeStatus } from "../actions/index";

const mapStateToProps = (state, ownProps) => ({
  status: "read"
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeStatusHandler: (status) => dispatch(changeStatus(status))

});
export default connect(mapStateToProps, mapDispatchToProps)(ToDoItem);
