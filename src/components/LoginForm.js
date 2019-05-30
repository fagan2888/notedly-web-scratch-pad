import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from '@emotion/styled';

import Wrapper from './Wrapper';
import Button from './Button';

const Form = styled.form`
  max-width: 600px;
  min-width: 300px;
  margin: 20px auto;
  padding: 2em;
  height: 100%;

  input {
    display: block;
    margin-bottom: 0.5em;
    padding: 10px;
    width: 100%;
  }
`;

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    redirect: false
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props
      .login({
        variables: { email: this.state.email, password: this.state.password }
      })
      .then(() => this.props.history.push('/'));
  };

  render() {
    return (
      <Wrapper>
        <Form onSubmit={this.onSubmit}>
          <input
            required
            type="email"
            name="email"
            placeholder="Email"
            onChange={this.onChange}
          />
          <input
            required
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.onChange}
          />
          <Button type="submit">Log in</Button>
        </Form>
      </Wrapper>
    );
  }
}

// export withRouter to enable this.props.history.push() redirect onSubmit
export default withRouter(LoginForm);
