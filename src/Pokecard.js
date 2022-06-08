import React from 'react'
import './Pokecard.css'

const Pokecard = ({ id, name, type, baseExperience }) => {
  const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

  return (
  <div className="Pokecard">
    <h4 className="Pokecard-name">{name}</h4>
    <img className="Pokecard-img" src={imgSrc} alt={name}></img>
    <p className="Pokecard-type">Type: {type}</p>
    <p className="Pokecard-base-experience">EXP: {baseExperience}</p>
  </div>
  )
}

export default Pokecard