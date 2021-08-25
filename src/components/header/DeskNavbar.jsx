import React from 'react';
import { HiMenuAlt3 as MenuIcon, HiOutlineSearch as SearchIcon  } from 'react-icons/hi';
import { BottomLine } from '../effectsComponents/BottomLine';
import { useShowComponent } from '../hooks/useShowComponent';
import { SearchForm } from './SearchForm';
import { Link, NavLink } from 'react-router-dom';
export const menuList = [
  {
    section: 'My Favorites',
    content: false,
  },
  {
    section: 'API info',
    content: false,
  },
  {
    section: 'Contact',
    content: false,
  },
  {
    section: <SearchIcon />,
    content: true,
  },
]

export const DeskNavbar = () => {
  const { handleToggle, toggle } = useShowComponent();

  return (
    <ul className="desk__menu">
      {/* {
        menuList.map(item => (
          <li className="menu--item">{ item.section }
          {
            item.content && <SearchForm />
              
          }
          <BottomLine />
          </li>
        ))
      } */}
      <li className="menu--item">
        <NavLink to="/" exact activeClassName="active--menu">Main</NavLink>
      </li>
      <li className="menu--item">
        <NavLink to="/user-page" exact activeClassName="active--menu">My Favorites <span className="fav--counter">7</span></NavLink>
      </li>
      <li className="menu--item">
        <NavLink to="/api-page" exact activeClassName="active--menu">
          API info
        </NavLink>
      </li>
      <li className="menu--item">
        <NavLink to="/contact-page" exact activeClassName="active--menu">
          Contact
        </NavLink>
      </li>
      <li 
        className="menu--item"
        onClick={ handleToggle }
      > <SearchIcon /></li>
      {
        toggle && <SearchForm />
      }
    </ul>

  )
}