import React from 'react';
import styled from 'styled-components';
import photo1 from '../../assets/images/photos/photo1.png';
import photo2 from '../../assets/images/photos/photo2.png';

const StyledDiv = styled.div`
  position: relative;
  display: grid;
  background-color: black;
  width: 100%;
  height: 150px;
  align-items: center;
  justify-content: center;
  z-index: 100;
  background-image: url(${props => props.backgroundPhoto ? photo1 : photo2});
  background-size: cover;

  @media (min-width: 600px) {
    height: 200px;
  }
`

const StyledBackdrop = styled.div`
  position: absolute;
  width: 100%;
  background-color: black;
  opacity: 0.7;
  height: 100%;
  z-index: 200;
`

const StyledText = styled.p`
  font-weight: bold;
  font-size: 2em;
  z-index: 300;
  color: #f9f7f7;
  font-family: 'Noto Sans', sans-serif;
  text-shadow: 0px 0px 15px rgba(255, 255, 255, 0.8);

  @media (min-width: 600px) {
    font-size: 3.5em;
  }
`

const breakBar = (props) => (

  <StyledDiv backgroundPhoto={props.backgroundPhoto}>
    <StyledBackdrop/>
    <StyledText>{props.children}</StyledText>
  </StyledDiv>
);

export default breakBar;