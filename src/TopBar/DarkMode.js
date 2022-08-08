import React from 'react'
import {Link} from 'react-router-dom'
const DarkMode = () => {
  return (
    <div>
        <li className="nav-item d-none d-lg-block"><Link className="nav-link nav-link-style" to='/' data-prev-layout=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-moon ficon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg></Link></li>
    </div>
  )
}

export default DarkMode