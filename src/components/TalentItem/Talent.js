import React from 'react';
import { StyledItemDiv, StyledDiv, StyledName } from  '../Participant/Participant';
import styled from '../../../node_modules/styled-components';

const StyledTalentImg = styled.img`
  position: absolute;
  top: 30%;
  left: 20%;
  max-width: 100%;
  z-index: 1;
  @media screen and (min-width: 480px) {
    max-width: 100%;
  }

  ${StyledDiv}:hover & {
    visibility: hidden;
  };

`;

const StyledTalentImgAlt = styled.img`
  position: absolute;
  top: 30%;
  left: 20%;
  visibility: hidden;
  max-width: 100%;
  z-index: 1;

  @media screen and (min-width: 480px) {
    max-width: 100%;
  }

   ${StyledDiv}:hover & {
    visibility: visible;
  };
`;



const talent = (props) => (
  <StyledDiv>
    <StyledItemDiv>
      <StyledName>shiru15</StyledName>
      <StyledTalentImg src={props.imgSrc} alt={props.talentName}/>
      <StyledTalentImgAlt src={props.altImgSrc} alt={props.talentName}/>
    </StyledItemDiv>
  </StyledDiv>
);

export default talent;