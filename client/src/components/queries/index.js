import { gql } from '@apollo/client';

export const FETCH_GAMES = gql`
	query fetchGames {
		games{
			id
			title
			genre
			rating
		}
	}
`;