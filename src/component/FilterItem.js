import React, { Component } from "react";
import "../App.css";
import { Link, Route } from 'react-router-dom';
import ShowItemListContainer from '../container/ShowItemListContainer';

class FilterItem extends Component {

  showFilterList(event) {
    console.log(this.props.todos);
    const statusOfList = event.target.attributes.getNamedItem("data-filter")
      .value;
    this.props.filterHandler(statusOfList);
  }

  render() {
    let match = this.props.match;
    return (
      <div>
        <ul className="filters">
          <li>
            <Link
              to={`${match.url}?status=completed,active`}
              onClick={e => this.showFilterList(e)}
              data-filter="all"
              // className={classNames({
              //   selected: this.props.statusOfList === Todo.ALL
              // })}
            >
              ALL
            </Link>
          </li>
          <li>
            <Link
              to={`${match.url}?status=active`}
              onClick={e => this.showFilterList(e)}
              data-filter="active"
              // className={classNames({
              //   selected: this.props.statusOfList === Todo.ACTIVE
              // })}
            >
              Active
            </Link>
          </li>
          <li>
            <Link
              to={`${match.url}?status=completed`}
              onClick={e => this.showFilterList(e)}
              data-filter="completed"
              // className={classNames({
              //   selected: this.props.statusOfList === Todo.COMPLETED
              // })}
            >
              Complete
            </Link>
          </li>
        </ul>
        <Route
          path={`${match.url}/:topicId`}
          component={ShowItemListContainer}
        />
      </div>
    );
  }
}

export default FilterItem;