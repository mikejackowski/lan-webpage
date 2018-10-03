import React, {Component} from 'react';
import styled from '../../../node_modules/styled-components';

// styled component here, not in render
const StyledBody = styled.div `
  background: #16222A;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #3A6073, #16222A);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #3A6073, #16222A); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  height: 100%;

  @media (min-width: 1000px) {
  max-width: 1200px;
  padding: 0 100px;
  }
`
class Layout extends Component {

  // state - mobile display??

  render () {
    return (
      <StyledBody>
        {this.props.children}
      </StyledBody>
    );
  }
}

export default Layout;