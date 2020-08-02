import { gql } from '@apollo/client';

export const FETCH_GAMES = gql`
	query FetchGames {
		games{
			id
			title
		}
	}
`;

export const FETCH_GAME = gql`
	query FetchGame($id: ID!) {
		game(id: $id) {
			id
			title
			genre
      rating
      publisher
		}
	}
`;

export const ADD_GAME = gql`
	mutation AddGame($title: String!, $rating: Int!, $genre: String!, $publisher: String!) {
		addGame(title: $title, rating: $rating, genre: $genre, publisher: $publisher) {
			title
			rating
			genre
			publisher
    }
	}
`;

export const REMOVE_GAME = gql`
	mutation RemoveGame($id: ID!) {
		removeGame(id: $id) {
			id
			title
		}
	}
`;