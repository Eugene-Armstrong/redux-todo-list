import React, { Component } from 'react';
import AddItemContainer from './container/AddItemContainer';
import FilterStatusContainer from './container/FilterItemContainer';
import ShowItemListContainer from './container/ShowItemListContainer';
import Header from './component/Header';
import './App.css'
import 'antd/dist/antd.css';
class App extends Component {
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