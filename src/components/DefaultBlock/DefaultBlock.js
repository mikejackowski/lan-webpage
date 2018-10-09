import React from 'react';
import styled from '../../../node_modules/styled-components';

const StyledBlock = styled.div`

`;

const StyledHeader = styled.h1`

`;

const StyledImg = styled.img`

`;

const StyledTextBlock = styled.div`

`;

const defaultBlock = (props) => {
  <StyledBlock>
    <StyledHeader>{props.headerText}</StyledHeader>
    <StyledImg src={props.imgSrc} alt={props.headerText}/>
    <StyledTextBlock>{props.children}</StyledTextBlock>
  </StyledBlock>

}