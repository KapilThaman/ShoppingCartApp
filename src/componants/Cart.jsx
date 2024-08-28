import React, { useState } from "react";

function Cart({ cart, setCart }) {

    const [price, setprice] = useState(0);
  return (
<div>
{
        cart?.map((item)=>{
           return(
            <div className="cart_box" key = {item.id}>
                <div className="cart_img">
                <img src={item.img} alt="item images" />
                <p>{item.title}</p>
                </div>
            </div> )
        })
}
</div>
);
}

export default Cart;
