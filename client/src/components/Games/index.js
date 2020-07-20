import React from 'react';
import GamesList from './GamesList';
import AddGame from './AddGame';

export default function GameList(props) {

  const games = props.data.games;
  
  return (
    <div>
      <AddGame />
      {games.map(game => <GamesList key={game.id} title={game.title} id={game.id}/>)}
    </div>
  )
}
