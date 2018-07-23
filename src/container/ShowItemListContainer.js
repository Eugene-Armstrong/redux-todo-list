import { connect } from "react-redux";
import ShowItemList from "../component/ShowItemList";
import { updateItemContent, toggleActiveItem } from "../actions/index";

import todosRemoteAPI from '../api/TodoRemoteAPI';

const mapStateToProps = (state, ownProps) => ({
  todos: state.todos,
  statusOfList: state.statusOfList
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateItemContentHandler: (viewId,content,statusOfList) => {
    todosRemoteAPI.updateItemContent(viewId,content);
    todosRemoteAPI.get(todos=>{
      dispatch(updateItemContent(todos))
    })
  },
  toggleActiveHandler: (todos) => {
    todosRemoteAPI.get(todos=>{
      dispatch(toggleActiveItem(todos))
    })
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(ShowItemList);