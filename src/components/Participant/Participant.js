import React from 'react';
import styled from '../../../node_modules/styled-components';
import na from '../../assets/images/teams/na.png'

const StyledParticipantDiv = styled.div `
  position: relative;
  width: 160px;
  height: 160px;
  text-align: center;
  margin: 0 auto;

`;

const StyledParticipantName = styled.div`
  font-weight: bold;
  font-size: 1em;
  text-align: center;
  padding: 10px 0 5px 0;
`;

const StyledDiv = styled.div`
  position: relative;
  width: 200px;
  text-align: center;
  border: 1px solid silver;
  margin: 5px;
  padding: 5px;
`;

const StyledImg = styled.img`
  max-width: 100%;
  z-index: 2;

  ${StyledParticipantDiv}:hover & {
    opacity: 0.5;
    z-index: 1;
  }
`;

const StyledTable = styled.table`
  display: none;
  background-color: rgba(198, 198, 198, 0.9);
  color: white;
  z-index: 5000;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  text-align: left;
  /*wtf*/
  ${StyledParticipantDiv}:hover & {
    display: static;
    z-index: 10;
  }
`;

const StyledRow = styled.tr`
  background-color: rgba(198, 198, 198, 0.9);
  border: 1px solid red;
  opacity: 0.5;
  width: 100%;
`;

const StyledTd = styled.td`
  border: 1px solid rgba(75, 75, 76, 0.9);
  color: black;
  font-weight: bold;
`;

const participant = (props) => (
  <StyledDiv>
  <StyledParticipantName>{props.altText}</StyledParticipantName>
    <StyledParticipantDiv>
      <StyledImg src={props.imgSrc}></StyledImg>
      <StyledTable>
        <tbody>
          <StyledRow>
            <StyledTd>1</StyledTd>
            <StyledTd>Nisha</StyledTd>
          </StyledRow>
          <StyledRow>
            <StyledTd>1</StyledTd>
            <StyledTd>Nisha</StyledTd>
          </StyledRow>
          <StyledRow>
            <StyledTd>1</StyledTd>
            <StyledTd>Nisha</StyledTd>
          </StyledRow>
          <StyledRow>
            <StyledTd>1</StyledTd>
            <StyledTd>Nisha</StyledTd>
          </StyledRow>
          <StyledRow>
            <StyledTd>1</StyledTd>
            <StyledTd>Nisha</StyledTd>
          </StyledRow>
        </tbody>
      </StyledTable>
    </StyledParticipantDiv>
  </StyledDiv>
);

participant.defaultProps = {
  imgSrc: na
}
export default participant;