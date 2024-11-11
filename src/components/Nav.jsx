import React from "react";
import { Link } from "react-router-dom";


const Nav = ()=>{
  return(
   <div className="wat">
    <nav className="bg-peach p-2 text-white z-100" style={{zIndex:'100'}}>
        <div className="for">
          <img src="https://htmldemo.net/mixy/mixy/assets/images/logo.png" width={'100%'} alt="" />
        </div>
        <div className="teb">
          <form action="">
            <input type="text" name="" id="" />
          </form>
        </div>
        <ul className="">
            <Link className="bat teb" to={'/'}>Home</Link >
            <Link className="bat" to={'/product'} >Products</Link >
            <Link className="bat "  to={'/login'}>Contact</Link >
            <Link className="bat " to={'/Cart'}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-check-fill " viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0m-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"/>
              </svg>
            </Link>
        </ul>
    </nav>
   </div>
  )
}

export default Nav 