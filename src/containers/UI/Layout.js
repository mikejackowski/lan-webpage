import React from 'react';
import styled from '../../../node_modules/styled-components';


const StyledBackground = styled.div`
  background: #eee;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(1, 100%);
  padding: 0 1%;

  @media (min-width: 600px){
    padding: 0 5%;
  }
`
const StyledBody = styled.div `
  background: #fff;
  height: 100%;
  max-width: 1000px;
  justify-self: center;
`
const Layout = (props) => (
      <StyledBackground>
        <StyledBody>
          {props.children}
        </StyledBody>
      </StyledBackground>
);

export default Layout;