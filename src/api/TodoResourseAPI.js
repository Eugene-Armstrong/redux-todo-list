import Todo from '../model/Todo';
import {addItem,showFilterList,updateItemContent,toggleActiveItem,changeStatus} from '../actions'
import axios from 'axios';

// axios.get("http://localhost:8080/api/todos")
//   .then((response) =>{
//     allTodos = response.data._embedded.todos;
//     console.info(allTodos);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

const todosAPI = {
  todos: [],
  add(item) {
    this.todos.push(item);
  },
  filerByStatus(status) {
    if (status === Todo.ALL) {
      return this.todos;
    }
    return this.todos.filter(item => item.status === status);
  },
  toggleActive(viewId) {
    let todo = this.todos.find(item => item.viewId === viewId);
    if (todo !== undefined) {
      todo.toggleActive();
    }
  },
  updateItemContent(viewId, content) {
    let todo = this.todos.find(item => item.viewId === viewId);
    if (todo !== undefined) {
      todo.content = content;
    }
  }
};
export default todosAPI;

