import Wrapper from '../assets/wrappers/CocktailList'
import CocktailCard from './CocktailCard'

const CocktailList = ({ drinks }) => {
  if (!drinks) {
    return <h2 style={{ textAlign: 'center' }}>No matching cocktail found</h2>
  }
  return (
    <Wrapper>
      {drinks.map((drink) => {
        return <CocktailCard drink={drink} key={drink.idDrink} />
      })}
    </Wrapper>
  )
}

export default CocktailList
