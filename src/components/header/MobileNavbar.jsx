import React from 'react'
import { HiMenuAlt3 as MenuIcon, HiOutlineSearch as SearchIcon  } from 'react-icons/hi';
import { useShowComponent } from '../hooks/useShowComponent';
import { menuList } from './DeskNavbar';
import { SearchForm } from './SearchForm';


export const MobileNavbar = () => {
  const { handleToggle, toggle } = useShowComponent()
  return (
    // <div className="menu__dropdown container-10">
      <>
      <ul className="menu__list responsive">

        <li className="list--item">My Favorites <span className="fav--counter">7</span></li>
        <li className="list--item">API info</li>
        <li className="list--item">Contact</li>
        <li 
          className="list--item"
          onClick={ handleToggle }
          > <SearchIcon /> </li>
        {/* <li className="list--item"></li> */}
      </ul>
      {
        toggle && <SearchForm />
      }
      </>
      
    // </div>
          
  )
}
