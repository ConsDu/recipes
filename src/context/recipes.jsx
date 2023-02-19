import { createContext, useState, useEffect } from 'react';

const RecipesContext = createContext();

function Provider({ children }) {
  const [recipes, setRecipes] = useState();
  const [bookmarks, setBookmarks] = useState(() => {
    return JSON.parse(localStorage.getItem('userBookmarks')) ?? [];
  });

  useEffect(() => {
    fetch("/data.json")
      .then(response => response.json())
      .then(data => setRecipes(data.recipes))
  }, [])

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

  if (!recipes) {
    return <div className='vh-100 d-flex justify-content-center align-items-center'>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  }

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
