import React, { Component } from 'react';
import './App.css';
import Markdown from 'react-markdown';

import ParticipantsList from './containers/Participants/ParticipantsList';
import BreakBar from './components/BreakBar/BreakBar';
import Layout from './containers/UI/Layout';
import Prizepool from './components/Prizepool/Prizepool';
import TalentList from './containers/Talent/TalentList';
import DefaultBlock from './components/DefaultBlock/DefaultBlock';

import photo1 from './assets/images/photos/photo1.png';
import photo2 from './assets/images/photos/photo2.png';
import photo3 from './assets/images/photos/photo2.png';
import photo4 from './assets/images/photos/photo2.png';
import buddaPhoto from './assets/images/photos/budda.png';
import {buddaMarkdown} from './assets/markdown/budda.js';
import {qualiMarkdown} from './assets/markdown/qualifiers.js';
import aegis from './assets/images/icons/aegis.png';
import Button from './components/Button/Button';
import Footer from './components/Footer/Footer';


class App extends Component {
  render() {
    return (
      <Layout>
        <BreakBar backgroundPhoto={photo4}>Kwalifikacje</BreakBar>
        <DefaultBlock headerText="Kwalifikacje" imgSrc={aegis}>
          <Markdown source={qualiMarkdown}/>
          <Button url="https://dota2.pl">Kwalifikacje</Button>
        </DefaultBlock>
        <BreakBar backgroundPhoto={photo3}>Budda Play</BreakBar>
        <DefaultBlock headerText="Budda Play" imgSrc={buddaPhoto}>
          <Markdown source={buddaMarkdown}/>
        </DefaultBlock>
        <BreakBar backgroundPhoto={photo1}>Prizepool</BreakBar>
        <Prizepool/>
        <BreakBar backgroundPhoto={photo2}>Teams</BreakBar>
        <ParticipantsList/>
        <BreakBar backgroundPhoto={photo1}>Talent</BreakBar>
        <TalentList/>
        <Footer/>
      </Layout>
    );
  }
}

export default App;
