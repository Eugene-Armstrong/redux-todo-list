import { connect } from 'react-redux';
import App from '../App';
import { showFilterList } from '../actions/index';

const mapStateToProps = (state, ownProps) => ({
  todos: state.todos,
  statusOfList: state.statusOfList
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  filterHandler: (todos, statusOfList) =>
    dispatch(showFilterList(todos, statusOfList))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
