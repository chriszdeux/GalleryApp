import { useEffect, useRef, useState } from "react"
import { FetchUser } from "../../fetching-data/FetchUser"

export const useFetchUser = ( user ) => {
  const [userData, setUserData] = useState({
    data: [],
    loading: true,
    error: false
  })
  const iseMounted = useRef(true)
  useEffect(() => {
    return () => {
      iseMounted.current = false
    }
  }, [  ])

  useEffect(() => {
    FetchUser(user)
      .then(item => {
        // debugger
        // debugger
        if(item?.id === undefined) {
          setUserData({
            data: undefined,
            loading: false,
            error: true
          })
        } else if( iseMounted.current ) {
          setUserData({
            data: item,
            loading: false,
            error: false
          })
        }
      })
  }, [ user ])
  // debugger
  return userData
}