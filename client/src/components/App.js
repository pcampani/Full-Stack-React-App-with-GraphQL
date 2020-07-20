import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { useQuery } from '@apollo/client';
import { Switch, Route } from 'react-router-dom';

import  * as query from './queries'
import theme from './ui/theme';
import Games from './Games';
import GameDetail from '../Details/GameDetail';

export default function App() {

  const {data, loading, error} = useQuery(query.FETCH_GAMES);
  if(loading) return <h1>Loading....</h1>
  
  return(
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path='/' render={(props)=> <Games {...props} data={data}/>} />
        <Route path='/games/:id' component={GameDetail} />
      </Switch>
    </ThemeProvider>
  )
}
