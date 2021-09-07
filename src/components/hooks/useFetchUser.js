import { useEffect, useState } from "react"
import { FetchUser } from "../../fetching-data/FetchUser"

export const useFetchUser = ( user ) => {
  const [myData, setMyData] = useState({
    data: {},
    loading: true,
    error: false
  })

  useEffect(() => {
    FetchUser(user)
      .then(item => {
        setMyData({
          data: item,
          loading: false,
          error: false
        })
      })
  }, [ user ])

  return myData
}