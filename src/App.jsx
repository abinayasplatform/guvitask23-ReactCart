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
      description:"Cosmetics are used for improving skin appearance and body odor.",
      rating: '⭐⭐⭐',
      price: ["₹1000 - ₹3500"],
      sale: null,
      buttonvalue: "Add to Cart"
    },
    {
      id: 2,
      name: "Shoes",
      description:"A shoe is an item of footwear that comfort the human foot.",
      rating: "⭐⭐⭐⭐⭐",
      price: ["₹800 - ₹1300"],
      sale: 'sale',
      buttonvalue: "Add to Cart"
    },
    {
      id: 3,
      name: "Kurtis",
      description:"A kurta is a long, loose shirt commonly worn in South Asia.",
      rating: '⭐⭐⭐',
      price: ["₹600 - ₹1200"],
      sale: 'sale',
      buttonvalue: "Add to Cart"
    },
    {
      id: 4,
      name: "Jeans",
      description:"Jeans are a type of pants made from denim or dungaree cloth.",
      rating: "⭐⭐⭐⭐",
      price: ["₹700 - ₹1800"],
      sale: null,
      buttonvalue: "Add to Cart"
    },
    {
      id: 5,
      name: "Casual Shirts",
      description:"Casual shirts have less rigid collars made from similar fabrics.",
      rating: '⭐⭐⭐',
      price: ["₹500 - ₹900"],
      sale: 'sale',
      buttonvalue: "Add to Cart"
    },
    {
      id: 6,
      name: "Formal Shirts",
      description:"It is the more formal evening garment worn with tie.",
      rating: '⭐⭐',
      price: ["₹800 - ₹1500"],
      sale: null,
      buttonvalue: "Add to Cart"
    },
    {
      id: 7,
      name: "Frocks",
      description:"Frock is an outer garment worn by monks and friars.",
      rating: "⭐⭐⭐⭐",
      price: ["₹1000 - ₹3500"],
      sale: null,
      buttonvalue: "Add to Cart"
    },
    {
      id: 8,
      name: "Party Wear",
      description:"It is a bright and colorful dress that you wear to a formal event.",
      rating: "⭐⭐⭐",
      price: ["₹700 - ₹2500"],
      sale: null,
      buttonvalue: "Add to Cart"
    },
    {
      id: 9,
      name: "Traditional Wear",
      description:"It is the collection of garments in the past worn by an identifiable group of people.",
      rating: "⭐⭐⭐⭐",
      price: ["₹1500 - ₹2500"],
      sale: null,
      buttonvalue: "Add to Cart"
    },
    {
      id: 10,
      name: "Shorts for Men",
      description:"Trousers reaching the top of the thigh or partway to the knee, relaxing in summer.",
      rating: "⭐⭐⭐⭐⭐",
      price: ["₹900 - ₹1500"],
      sale: 'sale',
      buttonvalue: "Add to Cart"
    },
    {
      id: 11,
      name: "House Appliance",
      description:"It is a device that helps with household chores, including cooking, food preservation.",
      rating: "⭐⭐⭐⭐",
      price: ["₹15000 - ₹50000"],
      sale: 'sale',
      buttonvalue: "Add to Cart"
    },
    {
      id: 12,
      name: "Mobile Phones",
      description:" It is a portable telephone that can make and receive calls over a radio frequency.",
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
