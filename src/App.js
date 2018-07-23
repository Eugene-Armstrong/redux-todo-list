import React, { Component } from 'react';
import AddItemContainer from './container/AddItemContainer';
import FilterStatusContainer from './container/FilterItemContainer';
import ShowItemListContainer from './container/ShowItemListContainer';
import Header from './component/Header';
import './App.css'
import 'antd/dist/antd.css';
import todosAPI from './api/TodoResourseAPI';
class App extends Component {
  // componentDidMount() {
  //   // todosAPI
  // }
  render() {
    return (
      <div className="container">
        <Header/>
        <AddItemContainer />
        <ShowItemListContainer />
        <FilterStatusContainer/>
      </div>
    );
  }
}

 export default App;