import React from 'react'
import "./Cart.css"
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <div>
        <li className="nav-item dropdown dropdown-cart me-1 show">
       <Link className="nav-link position-relative" to="/" data-toggle="dropdown" aria-expanded="true"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-shopping-cart ficon"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
       <span className="position-absolute top-0 translate-middle badge rounded-pill bg-primary text-white" style={{transform: "translate(-40%,-60%)"}}>6</span></Link> 
       </li>
    </div>
  )
}

export default Cart