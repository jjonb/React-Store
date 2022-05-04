import React from 'react'
import { Link } from "react-router-dom";


export default function ProductCard({image,title,price}) {
  return (
    <div id="Card_container">
        <div id="Card_titles">{title}</div>
        <img id="Card_images" src={image} alt="Shows item"></img>
        <div id="Card_prices">${price}</div>
    </div>
  )
}
