import React from 'react';
import styled from '../../../node_modules/styled-components';

const FooterDiv = styled.div `
  width: 100%;
  text-align: center;
  color: #7d7d7d;
  margin: 0 auto;

  @media (max-width: 500px) {
    padding-bottom: 80px;
    background: #eee;
    margin-top: 10px;
  }
`
const Footer = () => (
  <FooterDiv>&copy; dota2.pl 2010-2018, made by mj.</FooterDiv>
);

export default Footer;