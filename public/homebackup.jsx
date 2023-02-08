import * as bootstrap from 'bootstrap' //Import Bootstrap js
import { Link } from 'react-router-dom'
import RecipesContext from '../context/recipes'
import NavBar from '../components/NavBar'
import Recipe from '../components/Recipe'
import useDataContext from '../hooks/use-data-context'

function Home() {

  const { recipes, bookmarks, category, handleFavoriteToggle, onCategoryChange } = useDataContext();

  return (
    <>
      <NavBar onCategoryChange={onCategoryChange} category={category} />

      <div className='d-xl-flex d-md-flex flex-row flex-wrap'>
        {
          category.all &&
          recipes.map(item => {
            return (
              <Recipe key={item.id} item={item} bookmarks={bookmarks} onFavToggle={handleFavoriteToggle} />
            )
          })
        }
        {
          category.cremosas &&
          recipes.filter(item => item.category === "cremosas").map(item => {
            return (
              <Recipe key={item.id} item={item} bookmarks={bookmarks} onFavToggle={handleFavoriteToggle} />
            )
          })
        }
        {
          category.veganas &&
          recipes.filter(item => item.category === "veganas").map(item => {
            return (
              <Recipe key={item.id} item={item} bookmarks={bookmarks} onFavToggle={handleFavoriteToggle} />
            )
          })
        }
        {
          category.marineras &&
          recipes.filter(item => item.category === "marineras").map(item => {
            return (
              <Recipe key={item.id} item={item} bookmarks={bookmarks} onFavToggle={handleFavoriteToggle} />
            )
          })
        }
        {
          category.huevo &&
          recipes.filter(item => item.category === "huevo").map(item => {
            return (
              <Recipe key={item.id} item={item} bookmarks={bookmarks} onFavToggle={handleFavoriteToggle} />
            )
          })
        }
        {
          category.salsas &&
          recipes.filter(item => item.category === "salsas").map(item => {
            return (
              <Recipe key={item.id} item={item} bookmarks={bookmarks} onFavToggle={handleFavoriteToggle} />
            )
          })
        }
        {
          category.bookmarks &&
          recipes.filter(item => bookmarks.includes(item.id)).map(item => {
            return (
              <Recipe key={item.id} item={item} bookmarks={bookmarks} onFavToggle={handleFavoriteToggle} />
            )
          })
        }
        {
          bookmarks.length === 0 && category.bookmarks && <h3 className='vw-100 text-center'>None saved!</h3>
        }
      </div>
    </>
  )


}

export default Home;
