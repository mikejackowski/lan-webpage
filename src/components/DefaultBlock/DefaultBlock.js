import React from 'react';
import styled from '../../../node_modules/styled-components';
import { StyledList } from '../../containers/Participants/ParticipantsList';
// const ReactMarkdown = require('react-markdown')

const StyledDualBlock = styled(StyledList)`
  grid-template-columns: repeat(1, 100%);
  padding: 2.5% 0;
  @media (min-width: 700px) {
    grid-template-columns: repeat(2, 40%);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(2, 40%);
  }
`;

const StyledImg = styled.img`
  width: 100%;
  border: 0.5px solid #7d7d7d;
  border-radius: 5px;
`;

const StyledTextBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 100%);
  align-items: center;
  text-align: justify;
  margin: 2.5%;
  a {
    font-weight: bold;
  }
  a:visited {
    color:  #f9f7f7;
  }
`;

const defaultBlock = (props) => (
  <StyledDualBlock>
    <StyledImg src={props.imgSrc} alt={props.headerText}/>
    <StyledTextBlock>{props.children}</StyledTextBlock>
  </StyledDualBlock>
)

export default defaultBlock;