import NavBar from '../components/NavBar'
import Recipe from '../components/Recipe'
import useDataContext from '../hooks/use-data-context'
import RecipesWrapper from '../components/RecipesWrapper'

function Veganas() {

  const { recipes, bookmarks, onBookmarkToggle } = useDataContext();

  return (
    <>
      <NavBar />
      <RecipesWrapper>
        {recipes.filter(item => item.category === "veganas").map(item => {
          return (
            <Recipe key={item.id} item={item} bookmarks={bookmarks} onBookmarkToggle={onBookmarkToggle} />
          )
        })}
      </RecipesWrapper>
    </>
  )
}

export default Veganas;
