import React, { Component } from "react";
import Todo from "../model/Todo";
import "../App.css";
import classNames from "classnames";
import todosAPI from "../api/TodoResourseAPI";
import { Button } from 'antd';

class FilterItem extends Component {
  // constructor(props) {
  //   super(props);
  // }

  showFilterList(event) {
    console.log(this.props.todos);
    const statusOfList = event.target.attributes.getNamedItem("data-filter")
      .value;
    const todos = this.deepCopy(todosAPI.filerByStatus(statusOfList));
    this.props.filterHandler(todos, statusOfList);

  }

  deepCopy(array) {
    return JSON.parse(JSON.stringify(array));
  }

  render() {
    return (
      <div>
        <ul className="filters">
          <li>
            <Button
              onClick={e => this.showFilterList(e)}
              data-filter="all"
              className={classNames({
                selected: this.props.statusOfList === Todo.ALL
              })}
            >
              ALL
            </Button>
          </li>
          <li>
            <Button
              onClick={e => this.showFilterList(e)}
              data-filter="active"
              className={classNames({
                selected: this.props.statusOfList === Todo.ACTIVE
              })}
            >
              Active
            </Button>
          </li>
          <li>
            <Button
              onClick={e => this.showFilterList(e)}
              data-filter="completed"
              className={classNames({
                selected: this.props.statusOfList === Todo.COMPLETED
              })}
            >
              Complete
            </Button>
          </li>
        </ul>
      </div>
    );
  }
}

export default FilterItem;