import React, { Component } from 'react';
import './App.css';

import ParticipantsList from './containers/Participants/ParticipantsList';
import BreakBar from './components/BreakBar/BreakBar';
import Layout from './containers/UI/Layout';
import Prizepool from './components/Prizepool/Prizepool';
import TalentList from './containers/Talent/TalentList';

import photo1 from './assets/images/photos/photo1.png';
import photo2 from './assets/images/photos/photo2.png';
import photo3 from './assets/images/photos/photo2.png';
import photo4 from './assets/images/photos/photo2.png';

class App extends Component {

  render() {
    return (
      <Layout>
        <BreakBar backgroundPhoto={photo1}>Prizepool</BreakBar>
        <Prizepool/>
        <BreakBar backgroundPhoto={photo2}>Teams</BreakBar>
        <ParticipantsList/>
        <BreakBar backgroundPhoto={photo1}>Talent</BreakBar>
        <TalentList/>
      </Layout>
    );
  }
}

export default App;
