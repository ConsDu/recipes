import { useContext } from 'react';
import RecipesContext from '../context/recipes';

function useDataContext() {
  const data = useContext(RecipesContext);
  return data;
}

export default useDataContext;
