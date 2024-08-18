import { useState } from "react";
import axios from "axios";
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * This is a custom hook that can be used to submit a form and simulate an API call
 * It uses Math.random() to simulate a random success or failure, with 50% chance of each
 */
const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (url, data) => {
    setLoading(true);
    axios.post(url, data).then(response => {
      console.log(response)
      setResponse({
        type: 'success',
        message: `Thanks for your submission ${data.name}, we will get back to you shortly!`,
      })
    }).catch(error => {
      console.log(error)
      setResponse({
        type: 'error',
        message: 'Something went wrong, please try again later!',
      })
    }).finally(setLoading(false))


  }
  return { isLoading, response, submit };
}

export default useSubmit;
