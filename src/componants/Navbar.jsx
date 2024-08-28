import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/Navbar.css'
function Navbar({size,setshow}) {

   
  return (
    <nav>
      <div className="nav-box">
        <span>New Shop</span>
        <div className="cart" onClick={()=>{setshow(false)}} >
        <span>
            <i className="fas fa-cart-plus"></i>
        </span>
        <span>{size}</span>
      </div>
      </div>
      
    </nav>
  );
}

export default Navbar;
