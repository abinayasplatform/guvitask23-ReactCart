import React from "react"
// Header component responsible for rendering the header section of the webpage
function Header() {
    // Returns JSX markup representing the header section
    return (
        <header className="bg-dark py-5 ">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Shop in style</h1>
                    <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                </div>
            </div>
        </header>
    )
}
export default Header;// Export Header component as default