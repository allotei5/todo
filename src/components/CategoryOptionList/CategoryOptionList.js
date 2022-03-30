import React from 'react'

export const CategoryOptionList = ({ category }) => {
  return (
    <option value={category.id}>{category.name}</option>
  )
}
