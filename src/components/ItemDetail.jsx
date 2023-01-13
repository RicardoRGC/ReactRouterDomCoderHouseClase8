import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

function ItemDetail({data}) {
    const {name}= useParams();
    const category= useLocation().pathname.split('/')[1];
     const item= data[category].find(item=>item.name===name);
  return (
    <>
    <h1>{name}</h1>
    <h2>{item.description}</h2>
    <h3>{item.score}</h3>

    </>
  )
}

export default ItemDetail