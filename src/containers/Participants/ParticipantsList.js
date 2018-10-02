import React, {Component} from 'react';
import styled from '../../../node_modules/styled-components';
import Participant from '../../components/Participant/Participant';
import teamlogo from '../../assets/images/teams/teamsecret.png';

const StyledList = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 40%);
    grid-column-gap: 5%;
    grid-template-rows: minmax(100px, auto);
    list-style-type: none;
    width: 100%;
    align-items: center;
    justify-content: center;
    justify-items: center;
    padding: 2.5%;

    background: #0F2027;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #2C5364, #203A43, #0F2027);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #2C5364, #203A43, #0F2027);
    @media (min-width: 500px) and (max-width: 840px) {
      grid-template-columns: repeat(3, 30%);
    }

    @media (min-width: 841px) {
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