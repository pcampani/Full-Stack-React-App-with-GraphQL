import React from 'react'
import Paper from '@material-ui/core/Paper';
import { useQuery } from '@apollo/client';
import {Link} from 'react-router-dom';
import Spinner from '../ui/spinner';

import * as query from '../queries';

export default function GameDetail(props) {

  const {data, loading, error} = useQuery(query.FETCH_GAME, {variables: {id:props.match.params.id}});

  if(loading) return <Spinner />
  if(error) return <h1>Error fetching data...</h1>

  return (
    <Paper>
      <h1>{data.game.title}</h1>
      <h2>{data.game.publisher}</h2>
      <p>{data.game.genre}</p>
      <p>{data.game.rating}</p>
      <Link to="/">Back to Games</Link>
    </Paper>
  )
}
