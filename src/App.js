import React, { Component } from 'react';
import AddItemContainer from './container/AddItemContainer';
import FilterItemContainer from './container/FilterItemContainer';
import ShowItemListContainer from './container/ShowItemListContainer';
import Header from './component/Header';
import './App.css'
import 'antd/dist/antd.css';
import todosAPI from './api/TodoResourseAPI';
import axios from 'axios';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.todosAPI = todosAPI;
  }
  componentDidMount() {
    const showFilterList = this.props.filterHandler;
    axios
      .get('http://localhost:8080/api/todos', {
        params: {
          id: 1,
          content: 'Remove unused imports',
          status: 'active'
        }
      })
      .then(res => {
        const todos = res.data._embedded.todos;
        console.log(todos);
        showFilterList(todos, "all");
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header/>
          <AddItemContainer />
          <ShowItemListContainer />
          <Link to="/api/todos/search/statusOfTodos" />
          <Route
            path="/api/todos/search/statusOfTodos"
            component={FilterItemContainer}
          />
        </div>
      </BrowserRouter>
    );
  }
}

 export default App;