import React from 'react';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import * as query from '../queries';

export default function Games({id, title}) {

  const [removeGame] = useMutation(query.REMOVE_GAME, {
    refetchQueries:[{query:query.FETCH_GAMES}]
  });

  const handleClick = () => {
    removeGame({variables: {id:id}});
  }

  return (
    <Paper>
      <Link to={`/games/${id}`}><h2>{title}</h2></Link>
      <DeleteIcon onClick={handleClick}/>
    </Paper>
  )
}
