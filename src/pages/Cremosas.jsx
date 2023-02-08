import NavBar from '../components/NavBar'
import Recipe from '../components/Recipe'
import useDataContext from '../hooks/use-data-context'
import RecipesWrapper from '../components/RecipesWrapper'

function Cremosas() {

  const { recipes, bookmarks, onBookmarkToggle } = useDataContext();

  return (
    <>
      <NavBar />
      <RecipesWrapper>
        {recipes.filter(item => item.category === "cremosas").map(item => {
          return (
            <Recipe key={item.id} item={item} bookmarks={bookmarks} onBookmarkToggle={onBookmarkToggle} />
          )
        })}
      </RecipesWrapper>
    </>
  )
}

export default Cremosas;
