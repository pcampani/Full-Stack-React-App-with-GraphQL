import React from 'react'
import Paper from '@material-ui/core/Paper';
import { useQuery } from '@apollo/client';
import * as query from '../components/queries';
import {Link} from 'react-router-dom';

export default function GameDetail(props) {

  const {data, loading, error} = useQuery(query.FETCH_GAME, {variables: {id:props.match.params.id}});

  if(loading) return <h1>Loading....</h1>
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
