import React, { Component } from 'react';
import './App.css';
import Main from './routes/main/container/MainContainer';

class App extends Component {

  constructor(props) {
    super(props);    
}
  render() {
    return (
        <Main/>
    );
  }
}

export default App;
