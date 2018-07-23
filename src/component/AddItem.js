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
      todosAPI.add(new Todo(this.refs.newItem.value));
      const todos = this.deepCopy(
        todosAPI.filerByStatus(this.props.statusOfList)
      );
      this.props.addHandler(todos);
      this.refs.newItem.value = "";
      console.log(this.props.todos);
    }else{
      info();
    }

    // }
  }

  render() {
    const myStyle={"width":"290px","margin-bottom":"20px"};
    return (
      <div>
        <input
          className="input-text"
          placeholder="请输入添加项"
          style={myStyle}
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