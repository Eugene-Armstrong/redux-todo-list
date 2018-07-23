import React, { Component } from "react";
import Todo from "../model/Todo";
import todosAPI from "../api/TodoResourseAPI";
import "../App.css";
import { Button,message} from 'antd';

const info = () => {
  message.error('添加项不能为空！',1);
};

class AddItem extends Component {
  // constructor(props) {
  //   super(props);
  // }

  deepCopy(array) {
    return JSON.parse(JSON.stringify(array));
  }

  add(event) {
    // if (event.keyCode === 13) {
    let content = this.refs.newItem.value;
    if(content!==""){
      // todosAPI.add(new Todo(content));
      const todos = this.deepCopy(
        todosAPI.filerByStatus(this.props.statusOfList)
      );
      this.props.addHandler(new Todo(content),this.props.statusOfList);
      this.refs.newItem.value = "";
      console.log(this.props.todos);
    }else{
      info();
    }
    // }
  }

  render() {
    return (
      <div>
        <input
          className="input-text"
          placeholder="请输入添加项"
          // onKeyUp={e => this.add(e)}
          id="todo-creator"
          ref="newItem"
        />
        <Button type="primary" onClick={e => this.add()} style={{"margin-left":"5px"}}>
          Add
        </Button>
      </div>
    );
  }
}


export default AddItem;