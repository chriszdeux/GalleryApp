import React, { useContext } from 'react'
import { HiMenuAlt3 as MenuIcon, HiOutlineSearch as SearchIcon  } from 'react-icons/hi';
import { Link, NavLink } from 'react-router-dom';
import { useShowComponent } from '../hooks/useShowComponent';
import { menuList } from './DeskNavbar';
import { SearchForm } from './SearchForm';
import { AiFillCloseSquare as CloseIcon } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { DataContext } from '../context/DataContext';

export const MobileNavbar = ({ handleToggle: myToggle }) => {
  const { favImages } = useContext(DataContext)
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
          <li className="list--item" onClick={ myToggle }>
          <NavLink exact to="/" activeClassName="active" >
          Main
          </NavLink>
          </li>
          <li className="list--item">
          <NavLink exact to="/favorite-page" activeClassName="active" onClick={ myToggle }>
          My Favorites <span className="fav--counter">{ favImages.length  }</span>
          </NavLink>
          </li>
          <li className="list--item">
          <NavLink exact to="api-page" activeClassName="active">
          API info      
          </NavLink>
          </li>
          <li 
          className="list--item"
          > 
          
            <SearchForm />
          </li>

        {/* <li className="list--item"></li> */}
        </ul>
    </motion.div>

      
    // </div>
          
  )
}
