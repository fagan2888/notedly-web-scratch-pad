import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import ReactMarkdown from 'react-markdown';

export const GET_NOTE = gql`
  query IndividualNote($noteId: ID!) {
    note(id: $noteId) {
      id
      content
      createdAt
      author {
        username
      }
    }
  }
`;

const Note = ({ match }) => {
  const noteId = match.params.id;
  return (
    <Query query={GET_NOTE} variables={{ noteId }}>
      {({ data, loading, error }) => {
        if (loading) return 'Loading...';
        if (error) return <p>Error! {error.message}</p>;

        return (
          <div>
            <ReactMarkdown source={data.note.content} />
          </div>
        );
      }}
    </Query>
  );
};

export default Note;
