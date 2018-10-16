import React from 'react';
import styled from '../../../node_modules/styled-components';
import { StyledList } from '../../containers/Participants/ParticipantsList';


const StyledDualBlock = styled(StyledList)`
  grid-template-columns: 1fr;
  @media (min-width: 700px) {
    grid-template-columns: repeat(2, 40%);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(2, 40%);
  }
`;

const StyledImg = styled.img`
  width: 100%;
  border: 5px solid #eee;
  box-sizing: border-box;
`;

const StyledTextBlock = styled.div`
  display: grid;
  grid-template-columns: 100%;
  align-items: start;
  text-align: justify;
  background: #eee;
  margin: 2.5%;
  height: 100%;
  a {
    font-weight: bold;
    color: #ccc;
  }
  a:visited {
    color: #fff;
  }
  p {
    margin: 2.5%;
  }

  @media (max-width: 700px) {
    margin: 2.5% 0;
  }
`;

const defaultBlock = (props) => (
  <StyledDualBlock id={props.id}>
    <StyledImg src={props.imgSrc} alt={props.headerText}/>
    <StyledTextBlock>{props.children}</StyledTextBlock>
  </StyledDualBlock>
)

export default defaultBlock;
