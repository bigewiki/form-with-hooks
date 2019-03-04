import React, { Component } from 'react';
import './App.css';
import RequestPictures from './components/RequestPictures';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { messageFromState: "Hello from state" };
  }

  render() {
    return (
      <div className="App">
      <RequestPictures props={this.state.messageFromState}/>
      </div>
    );
  }
}

export default App;
