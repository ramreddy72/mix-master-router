import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/CocktailCard'

const CocktailCard = ({ drink }) => {
  const {
    idDrink: id,
    strAlcoholic: alcoholic,
    strCategory: category,
    strDrink: name,
    strDrinkThumb: img,
  } = drink
  return (
    <Wrapper>
      <div className="image-container">
        <img src={img} alt={name} className="img" />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{category}</h5>
        <p>{alcoholic}</p>
        <Link to={`/cocktail/${id}`} className="btn">
          details
        </Link>
      </div>
    </Wrapper>
  )
}

export default CocktailCard
