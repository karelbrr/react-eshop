import { useEffect, useState } from "react"

/**
 * Podívej se na react query, která ti můžeš výrazně pomoc s načítáním dat a ujednodušit práci
 */
const useFetch = (fetch_url) => {
    const [data, setData] = useState([])
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState()

  useEffect(() => {
      fetch(fetch_url)
          .then(response => {
              if (response.ok) {
                  return response.json()
              }
              throw new Error(`Unable to get data: ${response.statusText}`)
          })
          .then(json => setData(json))
          .catch((err) => setError(err.message))
          .finally(() => setIsPending(false))
            
           
    }, [])
    return {data, isPending, error}
}
 
export default useFetch;