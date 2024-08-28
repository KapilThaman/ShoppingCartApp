import { useState } from 'react'
import './App.css'
import Navbar from './componants/Navbar'
import Shop from './componants/Shop'
import Cart from './componants/Cart';


function App() {
  const [cart, setCart] = useState([]);
  const [warning, setwarning] = useState(false);
  const [show, setshow] = useState(true);

const handleClick = (item)=>
{
 let isPresent = false;

  cart.forEach((product)=>{
    if(item.id === product.id){
      isPresent = true;
    }
  })
  if(isPresent){
    setwarning(true);
    setTimeout(()=>{
      setwarning(false);
    },2000)
    return
  }
 setCart([...cart, item]);
}

  return (
    <>
    <Navbar size = {cart.length} setshow={setshow}/>
    {show ? <Shop handleClick = {handleClick}/> : <Cart cart={cart} setCart={setCart}/>}
    
    {warning && <div className='warning'> Item is already in the cart</div>}
    </>
  )
}

export default App
