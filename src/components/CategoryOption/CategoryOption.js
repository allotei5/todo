import React, { useState, useEffect } from 'react'
import { CategoryOptionList } from '../CategoryOptionList/CategoryOptionList'

export const CategoryOption = () => {
    const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const categoriesFromServer = await fetchCategories();
      setCategories(categoriesFromServer);
    }

    getCategories();
  }, [])

  const fetchCategories = async () => {
    const res = await fetch('http://localhost:5000/TaskCategoryCollection')
    const data = await res.json();
    return data;
  }

  return (
    <>
        {categories.map((category, index) => (<CategoryOptionList category={category} key={index} />))}
    </>
  )
}
