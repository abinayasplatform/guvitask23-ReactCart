import React, { useState } from 'react';
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
      name: "Cosmetics",
      rating: '⭐⭐⭐',
      price: ["₹1000 - ₹3500"],
      sale: null,
      buttonvalue: "Add to Cart"
    },
    {
      id: 2,
      name: "Shoes",
      rating: "⭐⭐⭐⭐⭐",
      price: ["₹800 - ₹1300"],
      sale: 'sale',
      buttonvalue: "Add to Cart"
    },
    {
      id: 3,
      name: "Kurtis",
      rating: '⭐⭐⭐',
      price: ["₹600 - ₹1200"],
      sale: 'sale',
      buttonvalue: "Add to Cart"
    },
    {
      id: 4,
      name: "Jeans",
      rating: "⭐⭐⭐⭐",
      price: ["₹700 - ₹1800"],
      sale: null,
      buttonvalue: "Add to Cart"
    },
    {
      id: 5,
      name: "Casual Shirts",
      rating: '⭐⭐⭐',
      price: ["₹500 - ₹900"],
      sale: 'sale',
      buttonvalue: "Add to Cart"
    },
    {
      id: 6,
      name: "Formal Shirts",
      rating: '⭐⭐',
      price: ["₹800 - ₹1500"],
      sale: null,
      buttonvalue: "Add to Cart"
    },
    {
      id: 7,
      name: "Frocks",
      rating: "⭐⭐⭐⭐",
      price: ["₹1000 - ₹3500"],
      sale: null,
      buttonvalue: "Add to Cart"
    },
    {
      id: 8,
      name: "Party Wear",
      rating: "⭐⭐⭐",
      price: ["₹700 - ₹2500"],
      sale: null,
      buttonvalue: "Add to Cart"
    },
    {
      id: 9,
      name: "Traditional Wear",
      rating: "⭐⭐⭐⭐",
      price: ["₹1500 - ₹2500"],
      sale: null,
      buttonvalue: "Add to Cart"
    },
    {
      id: 10,
      name: "Shorts for Men",
      rating: "⭐⭐⭐⭐⭐",
      price: ["₹900 - ₹1500"],
      sale: 'sale',
      buttonvalue: "Add to Cart"
    },
    {
      id: 11,
      name: "House Appliance",
      rating: "⭐⭐⭐⭐",
      price: ["₹15000 - ₹50000"],
      sale: 'sale',
      buttonvalue: "Add to Cart"
    },
    {
      id: 12,
      name: "Mobile Phones",
      rating: "⭐⭐⭐",
      price: ["₹20000 - ₹125000"],
      sale: 'sale',
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
