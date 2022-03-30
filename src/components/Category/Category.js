import React from 'react'
// import { Categories } from '../Categories/Categories'
import { CategoryList } from '../CategoryList/CategoryList'

export const Category = ({categories}) => {
  return (
    <div>
        { categories.map((category, index) => (
          <CategoryList key={index} category={category}/>
        )) }
    </div>
  )
}
