import React from "react"

function Navbar({ cartCount, setCart }) {
    return (
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light container px-4 px-lg-5">
            <a className="navbar-brand" href="#!">Shopping-Cart</a>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                    
                    <li className="nav-item ">
                        <a className="nav-link active" aria-current='page' href="#!">Home</a>
                    </li>
                    
                    <li className="nav-item">
                        <a className="nav-link" href="#!">About</a>
                    </li>
                    
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#!" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Shop
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                                <a className="dropdown-item" href="#!">All Products</a>
                            </li>
                            <hr className="dropdown-divider" />
                            <li>
                                <a className="dropdown-item" href="#!">Popular Items</a>
                            </li>
                            <a className="dropdown-item" href="#!"> New Arrivals</a>
                        </ul>
                    </li>
                </ul>

                <form className="d-flex">
                    <button className="btn btn-outline-dark" type="button" onClick={() => setCart([])}>
                        <i className="bi-cart-fill me-1"/>
                        Cart
                        <span className="badge bg-dark text-white ms-1 rounded-pill">{cartCount}</span>
                    </button>
                </form>

            </div>
        </nav>
    )
}
export default Navbar;