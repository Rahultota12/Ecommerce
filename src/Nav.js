import React from 'react'
import {FaTruckMoving} from 'react-icons/fa';
import {AiOutlineHeart} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BsBagCheck} from 'react-icons/bs';
import {BiLogIn} from 'react-icons/bi';
import {BiLogOut} from 'react-icons/bi';
import  {Link}  from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import './css/Nav.css'
import logo from './img/logo.svg'
function Nav() {
  const { loginWithRedirect , user, isAuthenticated,logout } = useAuth0();
 
  return (
    <>
      <div className="free">
       
        <div className="icon">

        <FaTruckMoving/> 
        </div> 
        <p>Free shipping When shopping up $1000 </p>
      </div>
      <div className="main_header">
        <div className="container">
          <div className="logo">
            <img src={logo} style={{height:'30px' ,width:'100px'}} alt="logo" />
          </div>
          <div className="search_box">
            <input type="text"   placeholder='search your Products'/>
         <button>search</button>
          </div>
          <div className="icon">
          {
            isAuthenticated &&
            (
          <div className="account">
          <div className="user_icon">
          {/* <img src={user.picture} alt={user.name}  /> */}
          <AiOutlineUser/>
          </div>
          <p>{user.name}</p>
            </div>
              
            )
          }
            <div className="second_icon">
            <Link to="/" className="link"><AiOutlineHeart/></Link>
            <Link to="/cart" className="link"><BsBagCheck/></Link>
          
            </div>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="container">
        <div className="nav">

          <ul>
            <li>
              <Link to="/" className='link'>Home</Link>
            </li>
            <li>
              <Link to="/product" className='link'>Product</Link>
            </li>
            <li>
              <Link to="/about" className='link'>About</Link>
            </li>
            <li>
              <Link to="/contact" className='link'>contact</Link>
            </li>
          </ul>
        </div>
          <div className="auth">
          {
            isAuthenticated ?
            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}> <BiLogOut/></button>
            :
          <button  onClick={() => loginWithRedirect()}> <BiLogIn/></button>

          }
         
          
         
         
         
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav
