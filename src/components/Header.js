import React, { Component } from 'react';
import styled from '@emotion/styled';
import logo from '../logo.svg';
import Logout from './Logout';

const StyledHeader = styled.header`
  display: flex;
  height: 64px;
  position: fixed;
  align-items: center;
  width: 100%;
  padding: 0.5em 1em;
  background-color: #fff;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
  z-index: 1;
`;

const LogoText = styled.h1`
  margin: 0;
  padding: 0;
  display: inline;
`;

export default class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <img src={logo} alt="Notedly Logo" height="40" />
        <LogoText>Notedly</LogoText>
        <Logout />
      </StyledHeader>
    );
  }
}
