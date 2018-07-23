import React, { Component } from "react";
import Todo from "../model/Todo";
import { Checkbox } from 'antd';
import "../App.css";
class TodoItem extends Component {
  // constructor(props) {
  //   super(props);
  // }

  changeToEditable=()=> {
    this.props.changeStatusHandler("write");
  }

  updateItem(e, viewId, content) {
    if (e.keyCode === 13) {
      this.props.updateItemContent(viewId, content);
      // console.log(this.props.item);
      this.props.changeStatusHandler("read");
    }
  }

  toggleActive(viewId) {
    this.props.changeStatusHandler("read");
    this.props.toggleActiveHandler(viewId);
  }

  setEditable=(e)=>{
    e.target.setAttribute("contentEditable",true);
    e.target.focus();
  }

  setUnEditable=(e)=>{
    e.target.setAttribute("contentEditable",false);
  }

  render() {
    const item = this.props.item;
    return (
      <li className={item.status}
          onDoubleClick={this.setEditable}
          onBlur={this.setUnEditable}
      >
        {
          <Checkbox
            defaultChecked={item.status === Todo.COMPLETED}
            onClick={e => this.toggleActive(item.viewId)}
          ></Checkbox>
        }
        <span onDoubleClick={e => this.changeToEditable(e)}>
          {this.props.status === "read" ? (
            item.content
          ) : (
            <input
              autoFocus
              className="edit-input"
              defaultValue={item.content}
              onKeyUp={e =>
                this.updateItem(e, item.viewId, e.currentTarget.value)
              }
            />
          )}
        </span>
      </li>
    );
  }
}
export default TodoItem;
