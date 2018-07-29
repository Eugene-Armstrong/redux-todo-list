import { connect } from "react-redux";
import ShowItemList from "../component/ShowItemList";
import { updateItemContent, toggleActiveItem } from "../actions/index";

const mapStateToProps = (state, ownProps) => ({
  todos: state.todos,
  statusOfList: state.statusOfList
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateItemContentHandler:(todos) => dispatch(updateItemContent(todos)),
  toggleActiveHandler:(todos) => dispatch(toggleActiveItem(todos))
});
export default connect(mapStateToProps, mapDispatchToProps)(ShowItemList);