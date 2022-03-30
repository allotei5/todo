import React from 'react'

export const CategoryList = ({category}) => {
  return (
    <div style={{height: "75px", backgroundColor: "#F8F9FA", borderRadius: "5px", padding: "25px", marginBottom: "10px"}}>
        <div>{category.name}</div>
    </div>
  )
}
