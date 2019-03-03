import React, { Component } from 'react';
import './App.css';
import RequestPictures from './components/RequestPictures';

class App extends Component {
  render() {
    return (
      <div className="App">
      <RequestPictures/>
      </div>
    );
  }
}

export default App;
