import React, { Component } from 'react';
import './App.css';
import ParticipantsList from './containers/Participants/ParticipantsList';
import BreakBar from './components/BreakBar/BreakBar';
import Layout from './containers/UI/Layout';
import Prizepool from './components/Prizepool/Prizepool';


class App extends Component {

  render() {
    return (
      <Layout>
        <BreakBar backgroundPhoto={true}>Prizepool</BreakBar>
        <Prizepool/>
        <BreakBar backgroundPhoto={true}>Teams</BreakBar>
        <ParticipantsList/>
      </Layout>
    );
  }
}

export default App;
