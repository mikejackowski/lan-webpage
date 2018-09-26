import React, {Component} from 'react';
import styled from '../../../node_modules/styled-components';
import Participant from '../../components/Participant/Participant';
import teamlogo from '../../assets/images/teams/teamsecret.png';

const StyledList = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 40%);
    grid-column-gap: 2.5%;
    grid-template-rows: minmax(100px, auto);
    list-style-type: none;
    width: 100%;
    align-items: center;
    justify-content: center;
    justify-items: center;
    padding: 2.5%;
    @media (min-width: 500px) {
      grid-template-columns: repeat(4, 20%);
    }
`

class ParticipantsList extends Component {
  render () {
    return (
      <StyledList>
        <Participant showTable={true} imgSrc={teamlogo} altText="Team Secret"/>
        <Participant imgSrc={teamlogo} altText="Team Secret"/>
        <Participant imgSrc={teamlogo} altText="Team Secret"/>
        <Participant altText="Team Secret"/>
      </StyledList>
    )
  }
}

export default ParticipantsList;