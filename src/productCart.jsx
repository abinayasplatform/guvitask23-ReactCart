import React from "react"
// ProductCard component responsible for rendering each product card
function ProductCard({ product, handleCart, cart }) {
  // Returns JSX markup representing a product card
  return (
    <div key={product.id} className="col mb-5">
      <div className="card h-100">
        {/* Render a sale badge if product is on sale */}
        {product.sale && (
          <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>
        )}
        <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" className="card-img-top" alt="Product" />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{product.name}</h5>
            {/* Display product rating if available */}
            {product.rating && (
              <div className="d-flex justify-content-center small text-warning mb-2">
                <p>{product.rating}</p>
              </div>
            )}
            <p className="card-text">
              {/* Display each price range */}
              {product.price.map((price, index) => (
                <span key={index} className={index === 0 && [2, 3, 5, 7].includes(product.id) ? 'price-line-through' : ""}>{price}</span>
              ))}
            </p>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-center p-4 pt-0 border-top-0 bg-transparent ">
          {/* Render appropriate button based on product button value */}
          {product.buttonvalue === "View Options" ? (
            <button className="btn btn-outline-dark ">View Options</button>
          ) : (
            <button className="btn btn-outline-dark " onClick={() => handleCart(product.id)}>
              {/* Conditional text for Add to Cart or Remove from Cart */}
              {cart.some(item => item.id === product.id) ? "Remove from Cart" : "Add to Cart"}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
export default ProductCard