import React from 'react';
import styled from '../../../node_modules/styled-components';
import na from '../../assets/images/teams/na.png'

export const StyledItemDiv = styled.div `
  position: relative;
  width: 150px;
  height: 150px;
  text-align: center;
  margin: 0 auto;

  @media screen and (min-width: 480px) {
    width: 160px;
    height: 100%;
    min-height: 164px;
  }
`;

export const StyledDiv = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  border: 0.5px solid #7d7d7d;
  border-radius: 5px;
  margin: 5px;
  padding: 7px;
  min-height: 200px;

  @media screen and (min-width: 480px) {
    width: 200px;
    margin: 5px;
    padding: 7px;
  }
`;

export const StyledName = styled.div`
  color: #F3F3F3;
  font-weight: bold;
  font-size: 1.2em;
  text-shadow: 0px 0px 36px rgba(1,1,1,0.9);
  text-align: center;
  padding: 5px 0;
`;

const StyledImg = styled.img`
  max-width: 100%;
  z-index: 1;
  @media screen and (min-width: 480px) {
    max-width: 100%;
  }

  ${StyledDiv}:hover & {
    opacity: 0.5;
  };

`;

const StyledTable = styled.table`
  visibility: hidden;
  background-color: rgba(198, 198, 198, 0.6);
  color: white;
  z-index: 5000;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  text-align: left;
  border-collapse: collapse;
  line-height: 27px;

  @media screen and (min-width: 480px) {
    line-height: 29px;
  }

  ${StyledDiv}:hover & {
    visibility: visible;
  }
`;

const StyledRow = styled.tr`
  background-color: rgba(198, 198, 198, 0.5);
  opacity: 0.5;
  width: 100%;
`;

const StyledTd = styled.td`
  text-align: center;
  border: 1px solid rgba(75, 75, 76, 0.2);
  color: #020202;
  font-weight: bold;
`;

const participant = (props) => (
  <StyledDiv>
  <StyledName>{props.altText}</StyledName>
    <StyledItemDiv>
      <StyledImg src={props.imgSrc} alt={props.altText}></StyledImg>
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
    </StyledItemDiv>
  </StyledDiv>
);

participant.defaultProps = {
  imgSrc: na
}
export default participant;