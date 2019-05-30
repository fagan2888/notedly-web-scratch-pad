import React from 'react';
import { Mutation, ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';
import { withRouter } from 'react-router-dom';

import NoteForm from '../components/NoteForm';

const NEW_NOTE = gql`
  mutation NewNote($content: String!) {
    newNote(content: $content) {
      id
    }
  }
`;

const New = props => {
  return (
    <ApolloConsumer>
      {client => (
        <Mutation
          mutation={NEW_NOTE}
          onCompleted={data => {
            if (data) {
              props.history.push(`note/${data.newNote.id}`);
            }
          }}
        >
          {(newNote, { loading, error }) => {
            if (loading) return 'Loading...';
            if (error) return `Error! ${error.message}`;
            return (
              <div>
                <h2>New Note</h2>
                <NoteForm newNote={newNote} />
              </div>
            );
          }}
        </Mutation>
      )}
    </ApolloConsumer>
  );
};

export default withRouter(New);
