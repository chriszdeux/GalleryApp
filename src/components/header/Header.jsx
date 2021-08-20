import React from 'react'

import { HiMenuAlt3 as MenuIcon, HiOutlineSearch as SearchIcon  } from 'react-icons/hi';

export const Header = () => {
  return (
    <header id="header">
        <nav className="mobile__navbar container-9">
          <h1 className="header--title">AweMage</h1>

          <ul className="desk__menu">
          <li className="menu--item">Gallery</li>
            <li className="menu--item">Info</li>
            <li className="menu--item">Contact</li>
            <li className="menu--item">
              <SearchIcon className="search--icon" />
              <form action="" className="search__form">
                <input type="search" className="search--input" />
            </form>
            </li>
          </ul>
          <MenuIcon className="menu--icon"/>

        </nav>
          
        
        <div className="menu__dropdown container-10">
          
          <ul className="menu__list">
            <li className="list--item">Gallery</li>
            <li className="list--item">Info</li>
            <li className="list--item">Contact</li>
            <li className="list--item">
              <SearchIcon className="search--icon" />
            
            </li>
          </ul>
          <form action="" className="search__form">
            <input type="search" className="search--input" />
          </form>
        </div>

        
        
      </header>
  )
}
