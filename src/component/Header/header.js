import React, {Component} from 'react';
import HeaderLink from './HeaderLink/Headerlink' 

import logo from '../../images/icons/logo.png'
import search from '../../images/icons/search-icon.png'
import cart from '../../images/icons/cart.png' 


class Header extends Component {
  render(){
    return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top header-wrapper">
        <div className="container">
          <a className="logo-link navbar-brand js-scroll-trigger" href="/"><img src={logo} /></a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav nav-fill w-100">
              <HeaderLink linkName="Mac" linkUrl="/mac/"/>
              <HeaderLink linkName="iphone"  linkUrl="/iphone/"/>
              <HeaderLink linkName="ipad"  linkUrl="/ipad/"/>
              <HeaderLink linkName="watch"  linkUrl="/applewatch/"/>
              <HeaderLink linkName="tv"  linkUrl="/tv/"/>
              

          <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">Music</a></li>
          <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">Support</a></li>
          <li><a className="search-link nav-link js-scroll-trigger" href="/search/"><img src={search} /></a></li>
          <li><a  className="cart-link nav-link js-scroll-trigger" href="/cart/"><img src={cart} /></a></li>
            </ul>
          </div>
        </div>
      </nav>
    

      <section className="searchbox">
  	    <form>
  		   <input type="text" name="searchbox"></input>
		     <button id="submitButton" className="btn btn-primary" type="submit">Search</button>
  	   </form>
       </section>
      </div>
  );
}
}

export default Header;
