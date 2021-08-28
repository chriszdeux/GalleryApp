import React from 'react'
import { HiMenuAlt3 as MenuIcon, HiOutlineSearch as SearchIcon  } from 'react-icons/hi';
import { Link, NavLink } from 'react-router-dom';
import { useShowComponent } from '../hooks/useShowComponent';
import { menuList } from './DeskNavbar';
import { SearchForm } from './SearchForm';
import { AiFillCloseSquare as CloseIcon } from 'react-icons/ai';
import { motion } from 'framer-motion';

export const MobileNavbar = () => {
  const { handleToggle, toggle } = useShowComponent()
  return (
    // <div className="menu__dropdown container-10">
    <motion.div 
      // animate={{ x: -100 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2}}
      className="responsive"
      // style={{ backgroundColor: '#000' }}  
    >
        <ul className="menu__list responsive">
          <li className="list--item">
          <NavLink exact to="/" activeClassName="active">
          Main
          </NavLink>
          </li>
          <li className="list--item">
          <NavLink exact to="/user-page" activeClassName="active">
          My Favorites <span className="fav--counter">7</span>
          </NavLink>
          </li>
          <li className="list--item">
          <NavLink exact to="api-page" activeClassName="active">
          API info      
          </NavLink>
          </li>
          <li className="list--item">
          <NavLink exact to="contact-page" activeClassName="active">
          Contact
          </NavLink>
          </li>
          <li 
          className="list--item"
          onClick={ handleToggle }
          > 
          {
          !toggle
          ? <SearchIcon className="search--icon"/>
          : <CloseIcon className="close--icon"/>
          } </li>

        {/* <li className="list--item"></li> */}
        </ul>
        {
        toggle && <SearchForm />
}
    </motion.div>

      
    // </div>
          
  )
}
