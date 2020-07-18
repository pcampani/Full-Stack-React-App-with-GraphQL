import React from 'react'

export default function GameDetail({title, rating, genre, publisher}) {
  return (
    <div>
      <h2>{title}</h2>
      <h3>{publisher}</h3>
      <p>{rating}</p>
      <p>{genre}</p>
    </div>
  )
}
