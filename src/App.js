import React, { Component } from 'react';

import AddItemContainer from './container/AddItemContainer';
import FilterStatusContainer from './container/FilterItemContainer';
import ShowItemListContainer from './container/ShowItemListContainer';
import Header from './component/Header';

class App extends Component {
  constructor(props) {
    super(props);
  }

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