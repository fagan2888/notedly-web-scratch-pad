import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';

const GET_NOTES = gql`
  query NoteFeed($cursor: String) {
    noteFeed(cursor: $cursor) {
      cursor
      hasNextPage
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

const Feed = () => (
  <Query query={GET_NOTES}>
    {({ data, loading, error, fetchMore }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;

      return (
        <div>
          <ul>
            {data.noteFeed.notes.map(note => (
              <li key={note.id}>
                {note.createdAt} {note.author.username} {note.id}
                <Link to={`note/${note.id}`}>Keep Reading</Link>
              </li>
            ))}
          </ul>
          {data.noteFeed.cursor && data.noteFeed.hasNextPage && (
            <MoreButton cursor={data.noteFeed.cursor} fetchMore={fetchMore}>
              Load More
            </MoreButton>
          )}
        </div>
      );
    }}
  </Query>
);

const MoreButton = ({ cursor, fetchMore, children }) => (
  <button
    type="button"
    onClick={() =>
      fetchMore({
        variables: {
          cursor: cursor
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          return {
            noteFeed: {
              cursor: fetchMoreResult.noteFeed.cursor,
              hasNextPage: fetchMoreResult.noteFeed.hasNextPage,
              // combine the new results and the old
              notes: [
                ...previousResult.noteFeed.notes,
                ...fetchMoreResult.noteFeed.notes
              ],
              __typename: 'NoteFeed'
            }
          };
        }
      })
    }
  >
    {children}
  </button>
);

export default Feed;
