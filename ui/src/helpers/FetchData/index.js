import { useEffect, useState } from 'react'
import axios from 'utils/axios';

// The hook is just a simple function which we can export
export const useFetch = (url, options) => {

  // First we define the necessary states for our hook
  // this includes data, the loading state and potential errors
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // useEffect can be compared to componentDidMount,
  // componentDidUpdate and componentDidUnmount
  // read more about useEffect here:
  // https://reactjs.org/docs/hooks-effect.html
  useEffect( () => {

    // First we set the loading and error states
    setLoading(true)
    setError(null)

    // Make a request 
    const FetchData = async () => {
      await axios.get(url, options)
        .then(function (response) {
          // handle success
          console.log(response.data);
          console.log(response.status);
          console.log(response.statusText);
          console.log(response.headers);
          console.log(response.config);

          setLoading(false)
          setData(response.data)
        })
        .catch(function (error) {
          // handle error
          setLoading(false)
          console.log(error);
          setError(error)
        })
        .finally(function () {
          // always executed
          setLoading(false)
        });
      };

    FetchData();
  }, [])

  return { data, loading, error }
}

