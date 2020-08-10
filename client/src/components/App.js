import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { ThemeProvider } from '@material-ui/styles';

import  * as query from './queries'
import Games from './Games';
import GameDetail from './Details/GameDetail';
import Navbar from './Navigation';
import Spinner from './ui/spinner';
import theme from './ui/theme';

export default function App() {

  const {data, loading, error} = useQuery(query.FETCH_GAMES);
  
  if(loading) return <Spinner />
  
  return(
    <ThemeProvider theme={theme}>
      <>
        <Navbar />
        <Switch>
          <Route exact path='/' render={(props)=> <Games {...props} data={data}/>} />
          <Route path='/games/:id' component={GameDetail} />
        </Switch>
      </>
    </ThemeProvider>
  )
}
