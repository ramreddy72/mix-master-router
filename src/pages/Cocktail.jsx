import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import Wrapper from '../assets/wrappers/CocktailPage'

const singleCocktailUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const searchSingleCocktail = (id) => {
  return {
    queryKey: ['cocktail', id],
    queryFn: async () => {
      const results = await axios.get(`${singleCocktailUrl}${id}`)
      return results.data
    },
  }
}
export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params
    await queryClient.ensureQueryData(searchSingleCocktail(id))
    return { id }
  }
const Cocktail = () => {
  const { id } = useLoaderData()
  const { data } = useQuery(searchSingleCocktail(id))
  const singleDrink = data.drinks[0]
  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink

  const validIngredients = Object.keys(singleDrink)
    .filter(
      (item) => item.includes('strIngredient') && singleDrink[item] !== null
    )
    .map((item) => singleDrink[item])

  return (
    <Wrapper>
      <header>
        <Link to="/" className="btn">
          back home
        </Link>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={image} alt={name} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">Name</span> : {name}
          </p>
          <p>
            <span className="drink-data">info</span> : {info}
          </p>
          <p>
            <span className="drink-data">category</span> : {category}
          </p>
          <p>
            <span className="drink-data">glass</span> : {glass}
          </p>
          <p>
            <span className="drink-data">ingredients</span> :{' '}
            {validIngredients.map((str, index) => {
              return (
                <span className="ing" key={index}>
                  {str} {index < validIngredients.length - 1 ? ', ' : ''}
                </span>
              )
            })}
          </p>
          <p>
            <span className="drink-data">instructions</span> : {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

export default Cocktail
