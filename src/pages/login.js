import React from 'react';
import { Mutation, ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';

import LoginForm from '../components/LoginForm';

const SIGNIN_USER = gql`
  mutation signIn($email: String, $password: String!) {
    signIn(email: $email, password: $password)
  }
`;

const Login = () => {
  return (
    <ApolloConsumer>
      {client => (
        <Mutation
          mutation={SIGNIN_USER}
          onCompleted={({ signIn }) => {
            localStorage.setItem('token', signIn);
            client.resetStore();
            client.writeData({ data: { isLoggedIn: true } });
          }}
        >
          {(signIn, { loading, error }) => {
            if (loading) return 'Loading...';
            if (error) return `Error! ${error.message}`;
            return <LoginForm login={signIn} />;
          }}
        </Mutation>
      )}
    </ApolloConsumer>
  );
};

export default Login;
