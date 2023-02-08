import NavBar from '../components/NavBar'
import Recipe from '../components/Recipe'
import useDataContext from '../hooks/use-data-context'
import RecipesWrapper from '../components/RecipesWrapper'
import { useParams } from 'react-router-dom';

function SpecificRecipe() {

  const { recipes, bookmarks, onBookmarkToggle } = useDataContext();
  const { id } = useParams();

  return (
    <>
      <NavBar />
      <RecipesWrapper>
        {recipes.filter(item => item.id === id).map(item => {
          return (
            <Recipe key={item.id} item={item} bookmarks={bookmarks} onBookmarkToggle={onBookmarkToggle} />
          )
        })}
      </RecipesWrapper>
    </>
  )
}

export default SpecificRecipe;
