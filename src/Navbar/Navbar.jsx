import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = ({handleThemeChange, theme}) => {
    return (
<div>
<div className="navbar fixed top-0 w-full z-50 lg:px-10  bg-base-100 backdrop-filter backdrop-blur-lg border-b border-neutral">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to ="/">Home</Link></li>
        <li><Link to ="/travel">Travel Tips</Link></li>
        <li>
          <summary>Visa & Immigration</summary>
          <ul className="p-2">
          <li><Link to ="/study_visa">Study Visa</Link></li>
          <li><Link to ="/work_visa">Work Study Visa</Link></li>
          <li><Link to ="/tourist_visa">Tourist Visa</Link></li>
          <li><Link to ="/business_visa">Business Visa</Link></li>
          </ul>
        </li>
        <li><Link to ="/food_in_china">Food In China</Link></li>
        <li><Link to ="/travel_accessories">Travel Accessories</Link></li>
        <li>
          <summary>Blog</summary>
          <ul className="p-2">
          <li><Link to="/news">News</Link></li>
          <li><Link to="/business">Business</Link></li>
          </ul>
        </li>
        <li><Link to="/about">About Me</Link></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Travel & Tips</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><Link to="/">Home</Link></li>
    <li><Link to ="/travel">Travel Tips</Link></li>
      <li>
        <details>
        <summary>Visa & Immigration</summary>
          <ul className="p-2">
          <li><Link to ="/study_visa">Study Visa</Link></li>
          <li><Link to ="/work_visa">Work Study Visa</Link></li>
          <li><Link to ="/tourist_visa">Tourist Visa</Link></li>
          <li><Link to ="/business_visa">Business Visa</Link></li>
          </ul>
        </details>
      </li>
      <li><Link to ="/food_in_china">Food In China</Link></li>
      <li><Link to ="/travel_accessories">Travel Accessories</Link></li>
      <li>
        <details>
          <summary>Blog</summary>
          <ul className="p-2">
          <li><Link to="/news">News</Link></li>
          <li><Link to="/business">Business</Link></li>
          </ul>
          </details>
        </li>
        <li><Link to ="/about">About Us</Link></li>
    </ul>
  </div>
  <button onClick={handleThemeChange} className='btn btn-ghost'>
                {theme ? (<><svg aria-hidden="true" id="theme-toggle-light-icon" class="w-5 h-5 day-mode" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg></>) : (<><svg aria-hidden="true" id="theme-toggle-dark-icon" class="w-5 h-5 day-mode" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg></>)}
            </button>
  <div className="navbar-end">
  <a className="btn">Button</a>
  </div>
</div>
</div>
    );
};
export default Navbar;


