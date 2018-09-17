import React, { Component } from 'react';
import './App.css';
import BreakBar from './components/BreakBar/BreakBar';

class App extends Component {

  render() {
    return (
      <div>
      <BreakBar backgroundPhoto={true}>Section title</BreakBar>
      </div>
    );
  }
}

export default App;
