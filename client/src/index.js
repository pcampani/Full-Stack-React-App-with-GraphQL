import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import './styles/styles.scss';

export default function App() {
	return (
		<CssBaseline>
			<h1>Hello World!!!</h1>
		</CssBaseline>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));