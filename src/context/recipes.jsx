import { createContext, useState, useEffect } from 'react';
import recipesDb from '../db/ensaladas';

const RecipesContext = createContext();

function Provider({ children }) {
  const [recipes, setRecipes] = useState(recipesDb);
  const [bookmarks, setBookmarks] = useState(() => {
    return JSON.parse(localStorage.getItem('userBookmarks')) ?? [];
  });

  useEffect(() => {
    localStorage.setItem('userBookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const onBookmarkToggle = item => {
    if (bookmarks.includes(item.id)) {
      setBookmarks(oldBookmarks => {
        return oldBookmarks.filter(bookmark => bookmark !== item.id);
      });
    } else {
      setBookmarks(oldBookmarks => [...oldBookmarks, item.id]);
    }
  };

  return (
    <RecipesContext.Provider
      value={{
        recipes,
        bookmarks,
        onBookmarkToggle,
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
}

export { Provider };
export default RecipesContext;
