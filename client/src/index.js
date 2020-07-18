import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import { useQuery, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:3000/data',
  cache: new InMemoryCache()
});

const FETCH_GAMES = gql`
	{
		games{
			id
			title
			genre
			rating
		}
	}
`;

import './styles/styles.scss';

export default function App() {

	const {loading, error, data} = useQuery(FETCH_GAMES);
	if(loading) return <h1>Loading...</h1>
	else 
		return (
			<h1>{data.games[0].title}</h1>
		)
}

ReactDOM.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	document.getElementById('root'));