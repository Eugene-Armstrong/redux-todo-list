import React, { Component } from "react";
import logo from '../logo.svg';
import '../App.css';

class Header extends Component {

  render() {
    return (
      <div>
        <header className="App App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h2>React To Do List</h2>
        <p>
          <em>Simple Todo List with adding and filter by diff status.</em>
        </p>
      </div>
    );
  }
}

export default Header;