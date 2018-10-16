import React from 'react';
import styled from '../../../../node_modules/styled-components';

import logo from '../../../assets/images/icons/d2pl.png';
import teams from '../../../assets/images/icons/participants.png'
import quali from '../../../assets/images/icons/quali.png'
import talent from '../../../assets/images/icons/talent.png'
import prizeppol from '../../../assets/images/icons/prizepool.png'
import venue from '../../../assets/images/icons/venue.png'


const StyledNavBar = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 2%;
  width: 100%;

  left: 0;
  height: 56px;
  background-color: #eee;
  z-index: 1000;
  justify-items: center;
  padding: 5px 0;

  @media (max-width: 500px) {
    bottom: 0;
    position: fixed;
  }
`;
const Link = styled.a`
  border-radius: 5px;
  display: grid;
  align-self: center;
  justify-self: center;
  height: 56px;
  text-decoration: none;
  background: #e4e3e3;
  width: 100%;
`
const StyledImg = styled.img`
  height: 70%;
  align-self: center;
  justify-self: center;

`

const navBar = (props) => (
  <StyledNavBar>
    <Link href="#top"><StyledImg src={logo}/></Link>
    <Link href="#quali"><StyledImg src={quali}/></Link>
    <Link href="#venue"><StyledImg src={venue}/></Link>
    <Link href="#prizepool"><StyledImg src={prizeppol}/></Link>
    <Link href="#teams"><StyledImg src={teams}/></Link>
    <Link href="#talent"><StyledImg src={talent}/></Link>
  </StyledNavBar>
);

export default navBar;