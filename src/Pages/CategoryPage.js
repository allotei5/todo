import React from 'react'
import { useState, useEffect } from 'react'
import { AddCategory } from '../components/AddCategory/AddCategory';

import { Category } from '../components/Category/Category'

export const CategoryPage = () => {
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

  const addCategory = async (category) => {
    console.log(category)
    let current = new Date();
    let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
    let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
    let dateTime = cDate + ' ' + cTime;
    const newCategory = { name: category.text, createdOn:dateTime, updatedOn:dateTime};

    const res = await fetch("http://localhost:5000/TaskCategoryCollection", {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newCategory)
    })

    const data = await res.json();
    setCategories([...categories, data])


    // const id = Math.floor(Math.random() *1000) + 1;
    // let current = new Date();
    // let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
    // let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
    // let dateTime = cDate + ' ' + cTime;
    // const newCategory = { id, name: category.text, createdOn:dateTime, updatedOn:dateTime};
    // setCategories([...categories, newCategory])
  }

  return (
    <div className='custom-container'>
        <h3>Categories</h3>
        <p>Add Categories</p>
        <AddCategory onAdd={addCategory}/>
        <Category categories={categories}/>
        
    </div>
  )
}
