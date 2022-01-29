import React, { useContext } from 'react'
import { HiMenuAlt3 as MenuIcon, HiOutlineSearch as SearchIcon  } from 'react-icons/hi';
import { Link, NavLink } from 'react-router-dom';
import { useShowComponent } from '../hooks/useShowComponent';
import { menuList } from './DeskNavbar';
import { SearchForm } from './SearchForm';
import { AiFillCloseSquare as CloseIcon } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { DataContext } from '../context/DataContext';

export const MobileNavbar = ({ values}) => {
  const { animation, handleToggle: myToggle } = values
  const { favImages, transitionAnimation } = useContext(DataContext)
  // const { handleToggle, toggle } = useShowComponent()

  

  const { fade_in } = transitionAnimation
  return (
    // <div className="menu__dropdown container-10">
    
        <ul className={`menu__list responsive ${ animation }`} >
          <li className="list--item" onClick={ myToggle }>
          <NavLink exact to="/gallery/" activeClassName="active" >
          Main
          </NavLink>
          </li>
          <li className="list--item">
          <NavLink exact to="/gallery/favorite-page" activeClassName="active" onClick={ myToggle }>
          My Favorites <span className="fav--counter">{ favImages.length  }</span>
          </NavLink>
          </li>
          <li className="list--item">
          {/* <NavLink exact to="/gallery/api-page" activeClassName="active">
          API info      
          </NavLink> */}
          </li>
          <li 
          className="list--item"
          > 
          
            <SearchForm myToggle={ myToggle }/>
          </li>

        {/* <li className="list--item"></li> */}
        </ul>

      
    // </div>
          
  )
}
