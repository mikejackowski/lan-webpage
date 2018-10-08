import React from 'react';
import styled, { css } from '../../../node_modules/styled-components';
import trophy from '../../assets/images/icons/trophy.svg';

const StyledPrizepoolLayout = styled.div `
  width: 100%;
  background: #0F2027;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #2C5364, #203A43, #0F2027);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #2C5364, #203A43, #0F2027);
  text-align: center;
`;

const StyledPrizepoolContainer = styled.div`
  display: inline-block;
  width: 100%;

`

const StyledBorder = styled.div`
  margin: 0 auto;
  width: 30%;
  border-bottom: 1px solid #D7D7D7;

`
const StyledText = styled.p`
  display: inline-block;
  font-size: 1em;
  color: #f9f7f7;
  font-family: 'Noto Sans', sans-serif;
  text-shadow: 0px 0px 15px rgba(200, 200, 200, 0.7);
  margin: 5px auto;


  ${props => props.first && css`
    font-size: 2em;
  `}

  ${props => props.second && css`
    font-size: 1.7em;
  `}

  ${props => props.third && css`
    font-size: 1.5em;
  `}

  ${props => props.hw && css `
    display: block;
    margin: 5px auto;
  `}
`;

const StyledImg = styled.img`
  max-height: 1.7em;
  -webkit-filter: drop-shadow(0px 0px 3px #fff);
  filter: drop-shadow(0px 0px 2px #fff);
`;

const StyledPlace = styled.p`
  padding-right: 10px;
  font-size: 1em;
  display: inline-block;
  font-size: 1.5em;
  font-family: 'Noto Sans', sans-serif;
  font-weight: bold;
  color: #f9f7f7;
  margin: 15px auto;

  ${props => props.first && css`
  font-size: 2em;

  `}

  ${props => props.second && css`
    font-size: 1.7em;
    color: #c0c0c0;
    text-shadow: 0px 0px 15px rgba(200, 200, 200, 0.7);
  `}

  ${props => props.third && css`
    font-size: 1.5em;
    color: #b1703a;
    text-shadow: 0px 0px 15px rgba(200, 200, 200, 0.7);
  `}

`;

const prizepool = (props) => (
  <StyledPrizepoolLayout>
    <StyledPrizepoolContainer>
      <StyledImg src={trophy} alt="1st"/><StyledText first>1500 PLN</StyledText>
      <StyledText hw>Klawiatura</StyledText>
      <StyledBorder/>
    </StyledPrizepoolContainer>
    <StyledPrizepoolContainer>
      <StyledPlace second>2</StyledPlace><StyledText second>500 PLN</StyledText>
      <StyledBorder/>
    </StyledPrizepoolContainer>
    <StyledPrizepoolContainer>
      <StyledPlace third>3</StyledPlace><StyledText third>250 PLN</StyledText>
    </StyledPrizepoolContainer>
  </StyledPrizepoolLayout>
);

export default prizepool;