import React from 'react'
import { CiShoppingCart } from 'react-icons/ci'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className="bg-base-100 sticky top-0 z-100 my-2 rounded-b-lg navbar shadow-sm">
      <div className="navbar-start">
        <a className="text-xl font-bold text-rose-500">
          {/* <img className='h-12' src={logo} alt="logo" /> */}
          <h2>FOOD<span className='text-black'>CART</span></h2>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to='/food_cart/'>Home</Link></li>
          <li><Link to='/food_cart/products/'>Products</Link></li>
          <li><a>Contact</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn_border"><CiShoppingCart /></a>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu right-0 menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><Link to='/food_cart/'>Home</Link></li>
            <li><Link to='/food_cart/products/'>Products</Link></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar