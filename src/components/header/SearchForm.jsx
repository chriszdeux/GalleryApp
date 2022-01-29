import React, { useContext, useEffect, useState } from 'react'
import { useSearchForm } from '../hooks/useSearchForm'
import { useHistory } from 'react-router-dom'
import { DataContext } from '../context/DataContext'
import { useFetchSearch } from '../hooks/useFetchSearch'
import { HiMenuAlt3 as MenuIcon, HiOutlineSearch as SearchIcon  } from 'react-icons/hi';

export const SearchForm = ({ myToggle }) => {
  const { setInputValue, inputValue:{ search }, handleEachData } = useContext( DataContext )
  const history = useHistory()
  // const { search } = inputValue
  const [handleSearch, setHandleSearch] = useState('');

  // const {  } = useFetchSearch( search )
  
  const { data } = useFetchSearch(handleSearch)
  const handleOnChange = ( e ) => {
    // debugger
    setInputValue({
      [e.target.name]:e.target.value
    })
    // setInputValue(e.target.value)
    console.log(e.target.value)
  }

  useEffect(() => {
    if(data.length > 0) {
      handleEachData(data)
    }
  }, [ data ])

  const handleSubmit =  ( e ) => {
    // debugger
    e.preventDefault();
    if(search.length > 2) {
      const replaceSimbols = /\s/gi
      // await submitForm(e.target);
      setInputValue( search.toLowerCase().replace(replaceSimbols, '-') )
      setHandleSearch(search)

      setInputValue('')
      history.push('/', null)

      setTimeout(() => {
        myToggle()
      }, 300);
      // debugger
      // navigate(`/crypto-asset`, { replace: true })
      // debugger
      // navigate('../asset/', { replace: true })
    }
  }
  // console.log(searchInput)
  return (
    <form action="" className="search__form" onSubmit={ handleSubmit }>
      <input 
        type="search" 
        name="search" 
        value={ search }
        onChange={ handleOnChange } 
        className="search--input" 
        autoComplete='off'
        />
        <SearchIcon style={{
          color: '#181818'
        }}/>
    </form> 
  )
}
