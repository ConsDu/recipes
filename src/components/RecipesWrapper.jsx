import React from 'react'

function RecipesWrapper({ children }) {
  return (
    <main className='d-xl-flex d-md-flex flex-row flex-wrap'>{children}</main>
  )
}

export default RecipesWrapper;