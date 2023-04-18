import { useEffect } from 'react'

export default function useRequest(url, set, array) {
  useEffect(() => {
    if (array.length > 0 && !array[0]) {
      console.log()
    } else {
      fetch(process.env.REACT_APP_JSON_URL + url)
      .then((response) => response.json())
      .then((response) => {
        set(response)
      })
    }
  }, array) 
}
