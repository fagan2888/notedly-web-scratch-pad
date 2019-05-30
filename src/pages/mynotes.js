import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';

const GET_MY_NOTES = gql`
  {
    me {
      notes {
        id
        createdAt
        content
        author {
          username
        }
      }
    }
  }
`;

const MyNotes = () => {
  const token = localStorage.getItem('token');
  return (
    <Query query={GET_MY_NOTES}>
      {({ data, loading, error, fetchMore }) => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;
        return (
          <div>
            <ul>
              {token &&
                data.me.notes.map(note => (
                  <li key={note.id}>
                    {note.createdAt} {note.author.username} {note.id}
                    <Link to={`note/${note.id}`}>Keep Reading</Link>
                  </li>
                ))}
            </ul>
          </div>
        );
      }}
    </Query>
  );
};

export default MyNotes;
