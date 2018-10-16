import React, { Component } from 'react';
import { StyledList } from '../Participants/ParticipantsList';
import Talent from '../../components/TalentItem/Talent';
import shiru15 from '../../assets/images/talentPhotos/shiru15.png';
import mj from '../../assets/images/talentPhotos/mj.png';
import luq from '../../assets/images/talentPhotos/luq.png';
import alkorn from '../../assets/images/talentPhotos/alkorn.png';
import doubleg from '../../assets/images/talentPhotos/doubleg.png';

class TalentList extends Component {


  render() {
    return (
      <StyledList id={this.props.id}>
        <Talent imgSrc={shiru15} altImgSrc={alkorn} talentName="shiru15"/>
        <Talent imgSrc={mj} altImgSrc={shiru15} talentName="mj"/>
        <Talent imgSrc={luq} altImgSrc={alkorn} talentName="Luq"/>
        <Talent imgSrc={doubleg} altImgSrc={luq} talentName="Double G"/>
        <Talent imgSrc={alkorn} altImgSrc={mj} talentName="Alkorn"/>
      </StyledList>
    );
  }
}

export default TalentList;