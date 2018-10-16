import React, { Component } from 'react';
import './App.css';
import Markdown from 'react-markdown';

import ParticipantsList from './containers/Participants/ParticipantsList';
import BreakBar from './components/BreakBar/BreakBar';
import Layout from './containers/UI/Layout';
import PrizePool from './components/Prizepool/Prizepool';
import TalentList from './containers/Talent/TalentList';
import DefaultBlock from './components/DefaultBlock/DefaultBlock';
import Button from './components/Button/Button';
import Footer from './components/Footer/Footer';
import NavBar from './components/Navigation/NavBar/NavBar';

import photo1 from './assets/images/photos/photo1.png';
import photo2 from './assets/images/photos/photo2.png';
import photo3 from './assets/images/photos/photo2.png';
import photo4 from './assets/images/photos/photo2.png';
import buddaPhoto from './assets/images/photos/budda.png';
import {buddaMarkdown} from './assets/markdown/budda.js';
import {qualiMarkdown} from './assets/markdown/qualifiers.js';
import aegis from './assets/images/icons/aegis.png';



class App extends Component {
  render() {
    return (
      <Layout>
        <NavBar/>
        <BreakBar first id="top" backgroundPhoto={photo4}>Kwalifikacje</BreakBar>
        <DefaultBlock id="quali" headerText="Kwalifikacje" imgSrc={aegis}>
          <Markdown source={qualiMarkdown}/>
          <Button url="https://dota2.pl">Kwalifikacje</Button>
        </DefaultBlock>
        <BreakBar backgroundPhoto={photo3}>Budda Play</BreakBar>
        <DefaultBlock id="venue" headerText="Budda Play" imgSrc={buddaPhoto}>
          <Markdown source={buddaMarkdown}/>
        </DefaultBlock>
        <BreakBar backgroundPhoto={photo1}>Prizepool</BreakBar>
        <PrizePool id="prizepool"/>
        <BreakBar backgroundPhoto={photo2}>Teams</BreakBar>
        <ParticipantsList id="teams"/>
        <BreakBar backgroundPhoto={photo1}>Talent</BreakBar>
        <TalentList id="talent"/>
        <Footer/>
      </Layout>
    );
  }
}

export default App;
