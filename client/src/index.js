import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';

import './styles/styles.scss';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import App from './components/App';

const client = new ApolloClient({
  uri: 'http://localhost:3000/data',
  cache: new InMemoryCache({
		typePolicies: {
			Query: {
				fields: {
					games: {
						merge(_ignored, incoming) {
							return incoming;
						},
					},
				},
			},
		}
	})
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ApolloProvider>,
	document.getElementById('root'));