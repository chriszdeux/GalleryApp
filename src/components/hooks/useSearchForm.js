import { useState } from "react"
// import { useNavigate } from "react-router-dom";

export const useSearchForm = (  ) => {
  // const [searchAsset, setSearchAsset] = useState('');
  const [inputValue, setInputValue] = useState({  })
  // debugger
  const handleOnChange = ( e ) => {
    // debugger
    setInputValue({
      [e.target.name]:e.target.value
    })
    // setInputValue(e.target.value)
  }
  // debugger

  const handleSubmit =  ( e ) => {
    // debugger
    e.preventDefault();
    if(inputValue.length > 3) {
      const replaceSimbols = /\s/gi
      // await submitForm(e.target);
      setInputValue( inputValue.toLowerCase().replace(replaceSimbols, '-') )
      setInputValue('')

      // navigate(`/crypto-asset`, { replace: true })
      // debugger
      // navigate('../asset/', { replace: true })
    }
  }

    return { inputValue, handleSubmit, handleOnChange }
}