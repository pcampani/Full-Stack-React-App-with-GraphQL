import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

export default function Games({id, title}) {
  return (
    <Paper>
      <Link to={`/games/${id}`}><h2>{title}</h2></Link>
    </Paper>
  )
}
