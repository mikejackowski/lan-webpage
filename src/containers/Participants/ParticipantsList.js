import React, {Component} from 'react';
import styled from '../../../node_modules/styled-components';
import Participant from '../../components/Participant/Participant';
import teamlogo from '../../assets/images/teams/teamsecret.png';

export const StyledList = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 40%);
    grid-column-gap: 5%;
    grid-template-rows: minmax(100px, auto);
    list-style-type: none;
    width: 100%;
    align-items: center;
    justify-content: center;
    justify-items: center;
    padding: 1em 0;

    @media (max-width: 500px) {
      padding: 0;
    }
    @media (min-width: 800px) {
      grid-template-columns: repeat(3, 25%);
    }

    @media (min-width: 1000px) {
      grid-template-columns: repeat(4, 20%);
    }
`

class ParticipantsList extends Component {
  render () {
    return (
      <StyledList id={this.props.id}>
        <Participant showTable={true} imgSrc={teamlogo} altText="Team Secret"/>
        <Participant imgSrc={teamlogo} altText="Team Secret"/>
        <Participant imgSrc={teamlogo} altText="Team Secret"/>
        <Participant imgSrc={teamlogo} altText="Team Secret"/>
      </StyledList>
    )
  }
}

export default ParticipantsList;
