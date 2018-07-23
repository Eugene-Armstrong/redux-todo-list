import Todo from '../model/Todo';
import {addItem,showFilterList,updateItemContent,toggleActiveItem,changeStatus} from '../actions'
import axios from 'axios';



const todosAPI = {
  todos: [],

  // init(dispatch){
  //   axios.get("http://localhost:8080/api/todos")
  //     .then((response) =>{
  //       this.todos = response.data._embedded.todos;
  //       console.info(this.todos);
  //       return this.todos;
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  //   dispatch()
  // },

  add(item) {
    this.todos.push(item);
    return this.todos;
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

