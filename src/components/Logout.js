import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { ApolloConsumer } from 'react-apollo';
import styled from '@emotion/styled';

const Container = styled.div`
  position: absolute;
  right: 1em;
`;

const ButtonLink = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0 !important;
  font: inherit;
  border-bottom: 1px solid #444;
  cursor: pointer;
`;

const Logout = props => {
  const token = localStorage.getItem('token');

  return (
    <ApolloConsumer>
      {client => (
        <Container>
          {token ? (
            <ButtonLink
              onClick={() => {
                localStorage.removeItem('token');
                props.history.push('/login');
                client.resetStore();
              }}
            >
              Logout
            </ButtonLink>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </Container>
      )}
    </ApolloConsumer>
  );
};

export default withRouter(Logout);
