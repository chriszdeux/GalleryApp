import { useEffect, useState } from "react"
import { MainData } from "../../fetching-data/FetchData"

export const useMainFetch = () => {
  const [myData, setMyData] = useState({
    data: [],
    loading: true,
    error: false
  })

  useEffect(() => {
    MainData()
      .then(item => {
        setMyData({
          data: item,
          loading: false,
          error: false
        })
      })
  }, [ ])

  return myData
}