import React from 'react';
import styled from 'styled-components';

// styled component here, not in render
const StyledDiv = styled.div`

`

const breakBar = (props) => (
  <StyledDiv>{props.children}</StyledDiv>
);

export default breakBar;