import React, { Component } from "react";
import Todo from "../model/Todo";
import todosAPI from "../api/TodoResourseAPI";
import "../App.css";

class AddItem extends Component {
  constructor(props) {
    super(props);
  }

  deepCopy(array) {
    return JSON.parse(JSON.stringify(array));
  }

  add(event) {
    // if (event.keyCode === 13) {
    let content = this.refs.newItem.value;
    if(content!==""){
      todosAPI.add(new Todo(this.refs.newItem.value));
      const todos = this.deepCopy(
        todosAPI.filerByStatus(this.props.statusOfList)
      );
      this.props.addHandler(todos);
      this.refs.newItem.value = "";
      console.log(this.props.todos);
    }else{
      alert("添加项不能为空！");
    }

    // }
  }

  render() {
    return (
      <div>
        <input
          className="input-text"
          // onKeyUp={e => this.add(e)}
          id="todo-creator"
          ref="newItem"
        />
        <div className="button" onClick={e => this.add()}>
          Add
        </div>
      </div>
    );
  }
}


export default AddItem;