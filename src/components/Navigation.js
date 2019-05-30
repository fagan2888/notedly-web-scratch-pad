import React from 'react';

import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const StyledNav = styled.nav`
  padding: 1em;
  background: #f5f4f0;

  @media (max-width: 700px) {
    padding-top: 64px;
  }

  @media (min-width: 700px) {
    position: fixed;
    width: 220px;
    height: calc(100% - 64px);
    overflow-y: scroll;
  }
`;

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  line-height: 2;

  a {
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1em;
    color: #333;
  }

  a:visited {
    color: #333;
  }

  a:hover,
  a:focus {
    color: #0077cc;
  }
`;

class Navigation extends React.Component {
  render() {
    return (
      <StyledNav>
        <NavList>
          <li>
            <Link to="/feed">
              <span aria-hidden="true" role="img">
                🍔
              </span>
              Feed
            </Link>
          </li>
          <li>
            <Link to="/mynotes">
              <span aria-hidden="true" role="img">
                📓
              </span>
              My Notes
            </Link>
          </li>
          <li>
            <Link to="/favorites">
              <span aria-hidden="true" role="img">
                🌟
              </span>
              Favorites
            </Link>
          </li>
        </NavList>
      </StyledNav>
    );
  }
}

export default Navigation;
