import React, { useContext, useState } from 'react'

import { HiMenuAlt3 as MenuIcon, HiOutlineSearch as SearchIcon  } from 'react-icons/hi';
import { useShowComponent } from '../hooks/useShowComponent';
import { DeskNavbar } from './DeskNavbar';
import { MobileNavbar } from './MobileNavbar';
import { AiFillCloseSquare as CloseIcon } from 'react-icons/ai';

import { motion } from 'framer-motion';
import { DataContext } from '../context/DataContext';
import { Link } from 'react-router-dom';


const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
}



export const Header = () => {
  const { transitionAnimation } = useContext(DataContext)
  const { fade_in, fade_out } = transitionAnimation
  const { handleToggle, toggle } = useShowComponent()
  const [animation, setAnimation] = useState(fade_in);
  // const [first, setfirst] = useState(second);
  const close = () => {
    setAnimation(fade_out)
    setTimeout(() => {
      handleToggle()
    }, 300);
  }

  const open = () => {
    setAnimation(fade_in)
    setTimeout(() => {
      handleToggle()
    }, 100);
  }

  return (
    <header id="header">
        <nav className="navbar">
          <Link to="/gallery">
            <h1 className="header--title">AweMage</h1>
          </Link>

          {/* <DeskNavbar /> */}
          {
            !toggle
            ? <MenuIcon 
                className="menu--icon"
                onClick={ open }
              // onClick={  }
              />
             : <CloseIcon 
                className="close--icon"
                onClick={ close }
                />
          }
        {
          toggle && 
          
            <MobileNavbar values={ {handleToggle, animation} }/>
        }
        
        {/* <MobileNavbar className="responsive"/> */}
        </nav>        
      </header>
  )
}
