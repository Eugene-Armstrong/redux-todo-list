import Todo from "../model/Todo";
import { addItem, showFilterList } from "../actions/index";
import axios from "axios";

const todosAPI = {
  todos: [],
  add(item, statusOfList, dispatch) {
    axios
      .post("http://localhost:8080/api/todos", {
        content: item.content,
        status: item.status
      })
      .then(res => {
        if (statusOfList === Todo.ALL) statusOfList = "completed,active";
        axios
          .get("http://localhost:8080/api/todos/search/statusOfTodos", {
            params: {
              status: statusOfList
            }
          })
          .then(res => {
            const todos = res.data._embedded.todos;
            dispatch(showFilterList(todos, statusOfList));
            dispatch(addItem(todos));
            return todos;
          });
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  filerByStatus(status, dispatch) {
    if (status === Todo.ALL) {
      status = "completed,active";
    }
    axios
      .get("http://localhost:8080/api/todos/search/statusOfTodos", {
        params: {
          status: status
        }
      })
      .then(res => {
        const todos = res.data._embedded.todos;
        console.log(todos);
        dispatch(showFilterList(todos, status));
        return todos;
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  toggleActive(viewId, status, dispatch) {
    if (status === Todo.COMPLETED) status = Todo.ACTIVE;
    else status = Todo.COMPLETED;
    axios
      .patch("http://localhost:8080/api/todos/" + viewId, {
        status: status
      })
      .then(res => {
        axios
          .get("http://localhost:8080/api/todos/search/statusOfTodos", {
            params: {
              status: "completed,active"
            }
          })
          .then(res => {
            const todos = res.data._embedded.todos;
            console.log(todos);
            dispatch(showFilterList(todos, Todo.ALL));
            return todos;
          });
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  updateItemContent(viewId, content) {
    let todo = this.todos.find(item => item.viewId === viewId);
    if (todo !== undefined) {
      todo.content = content;
    }
  }

};
export default todosAPI;

