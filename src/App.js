import React, { Component } from 'react';
import './App.css';
import Board from './contents/Board'
import SearchBar from './search/SearchBar'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Board/>
          <SearchBar/>
      </div>
    );
  }
}

export default Apspp;