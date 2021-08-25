import React from 'react'

import { HiMenuAlt3 as MenuIcon, HiOutlineSearch as SearchIcon  } from 'react-icons/hi';
import { useShowComponent } from '../hooks/useShowComponent';
import { DeskNavbar } from './DeskNavbar';
import { MobileNavbar } from './MobileNavbar';
import { AiFillCloseSquare as CloseIcon } from 'react-icons/ai';

export const Header = () => {
  const { handleToggle, toggle } = useShowComponent()
  return (
    <header id="header">
        <nav className="navbar">
          <h1 className="header--title">AweMage</h1>

          {/* <DeskNavbar /> */}
          {
            !toggle
            ? <MenuIcon 
                className="menu--icon"
                onClick={ handleToggle }
              // onClick={  }
              />
             : <CloseIcon 
                className="close--icon"
                onClick={ handleToggle }
                />
          }
        {
          toggle && <MobileNavbar />
        }
        
        {/* <MobileNavbar className="responsive"/> */}
        </nav>        
      </header>
  )
}
