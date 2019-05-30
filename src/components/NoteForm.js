import React, { Component } from 'react';
import styled from '@emotion/styled';

import Wrapper from './Wrapper';
import Button from './Button';

const Form = styled.form`
  margin: 0;
  border: none;
  min-height: 400px;
  textarea {
    width: 100%;
    margin: 0;
    min-height: 300px;
  }
`;

class NoteForm extends Component {
  state = {
    content: this.props.content || ''
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.newNote({
      variables: { content: this.state.content }
    });
  };

  render() {
    return (
      <Wrapper>
        <Form onSubmit={this.onSubmit}>
          <textarea
            required
            type="text"
            name="content"
            placeholder="Note content"
            onChange={this.onChange}
          />
          <Button type="submit">Save</Button>
        </Form>
      </Wrapper>
    );
  }
}

export default NoteForm;
