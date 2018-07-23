import { connect } from "react-redux";
import AddItem from "../component/AddItem";
import { addItem } from "../actions/index";
import todosRemoteAPI from '../api/TodoRemoteAPI'

const mapStateToProps = (state, ownProps) => ({
  todos: state.todos,
  statusOfList: state.statusOfList
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  addHandler: (item,statusOfList) => {
    todosRemoteAPI.add(item,function(todos){
      todosRemoteAPI.get(function(todos){
        dispatch(addItem(todos))
      })
    })
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(AddItem);
