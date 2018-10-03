import React, { Component } from 'react';
import './App.css';
import ParticipantsList from './containers/Participants/ParticipantsList';
import BreakBar from './components/BreakBar/BreakBar';
import Layout from './containers/UI/Layout';

class App extends Component {
  // state from markdowns?

  render() {
    return (
      <Layout>
        <BreakBar backgroundPhoto={true}>Teams</BreakBar>
        <ParticipantsList/>
      </Layout>
    );
  }
}

export default App;
