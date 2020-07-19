import React from 'react';
import GameDetail from './GameDetail';
import AddGame from './AddGame';

export default function GameList(props) {

  const games = props.data.games;
  
  return (
    <div>
      {console.log(games)}
      <AddGame />
      {games.map(game => <GameDetail key={game.id} {...game}/>)}
    </div>
  )
}
