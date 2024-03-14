import React, { useState } from 'react';
// import '../src/App.css';
import Navbar from "../src/navbar"
import Header from "../src/header"
import ProductCard from "../src/productCart"
import Footer from "../src/footer"



function App() {
  
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0); 
  
  const data = [
    
    {
      id: 1,
      name: "Fancy Product",
      rating: null,
      price: ["$40.00 - $80.00"],
      sale: null,
      buttonvalue: "Add to Cart"
    },
    {
      id: 2,
      name: "Special Item",
      rating: "⭐⭐⭐⭐⭐",
      price: ["$20.00", " $18.00"],
      sale: 'sale',
      buttonvalue: "Add to Cart"
    },
    {
      id: 3,
      name: "Sale Item",
      rating: null,
      price: ["$50.00", " $25.00"],
      sale: 'sale',
      buttonvalue: "Add to Cart"
    },
    {
      id: 4,
      name: "Popular Item",
      rating: "⭐⭐⭐⭐⭐",
      price: ["$40.00"],
      sale: null,
      buttonvalue: "Add to Cart"
    },
    {
      id: 5,
      name: "Sale Item",
      rating: null,
      price: ["$50.00", " $25.00"],
      sale: 'sale',
      buttonvalue: "Add to Cart"
    },
    {
      id: 6,
      name: "Fancy Product",
      rating: null,
      price: ["$120.00 - $280.00"],
      sale: null,
      buttonvalue: "Add to Cart"
    },
    {
      id: 7,
      name: "Special Item",
      rating: "⭐⭐⭐⭐⭐",
      price: ["$20.00", " $18.00"],
      sale: 'sale',
      buttonvalue: "Add to Cart"
    },
    {
      id: 8,
      name: "Popular Item",
      rating: "⭐⭐⭐⭐⭐",
      price: ["$40.00"],
      sale: null,
      buttonvalue: "Add to Cart"
    },
  ];



  
  const handleCart = (productId) => {
    
    const item = data.find(product => product.id === productId);
    
    const isItemInCart = cart.some(item => item.id === productId);
    
    
    if (isItemInCart) {
      const updatedCart = cart.filter(item => item.id !== productId); 
      setCart(updatedCart);
      setCartCount(prevCount => prevCount - 1);
    } else {
      
      setCart([...cart, item]);
      setCartCount(prevCount => prevCount + 1);
    }
  };




  return (
    
    <div>
      
      <Navbar cartCount={cartCount} setCart={setCart} />
      
      <Header />
      
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          
          <div className="row gx-4 gx-lg-4 row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-4 justify-content-center">
            
            {data.map(product => (
              <ProductCard key={product.id} product={product} handleCart={handleCart} cart={cart} />
            )
            )
            }

          </div>
        </div>
      </section>
      
      <Footer />

    </div>
  )
}


export default App;