import { connect } from "react-redux";
import AddItem from "../component/AddItem";
import { addItem } from "../actions/index";

const mapStateToProps = (state, ownProps) => ({
  todos: state.todos,
  statusOfList: state.statusOfList
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  addHandler: (todos) => dispatch(addItem(todos))
});
export default connect(mapStateToProps, mapDispatchToProps)(AddItem);
