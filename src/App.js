import React, { Component } from 'react';
import './App.css';
import BreakBar from './components/BreakBar/BreakBar';
import ParticipantsList from './containers/Participants/ParticipantsList';


class App extends Component {

  render() {
    return (
      <BreakBar backgroundPhoto={true}>Section title</BreakBar>
    );
  }
}

export default App;
