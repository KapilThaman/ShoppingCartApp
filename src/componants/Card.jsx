import React from "react";
import '../styles/Card.css'

function Card({ item,handleClick }) {
  return (
    <>
      <div className="cards">
        <div className="image_box">
        <img src={item.img} alt="Items Images" />
        </div>
        <div className="details">
            <p>{item.title}</p>
            <p>{item.author}</p>
            <p>Price: ${item.price}</p>
            <button onClick={()=>handleClick(item)}>Add To Cart</button>
        </div>
        
      </div>
    </>
  );
}

export default Card;
