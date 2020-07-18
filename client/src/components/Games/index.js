import React from 'react';
import GameDetail from './GameDetail';

export default function GameList(props) {

  const games = props.data.games;

  return (
    <div>
      {games.map(game => <GameDetail key={game.id} {...game}/>)}
    </div>
  )
}
