import axios from 'axios';

function AjaxRequest(url = "", method = "GET", data = {}, options = {}) {
  // Default headers if not provided
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  // Axios configuration
  const config = {
    method,
    url,
    data,
    headers,
    ...options,
  };

  // Making the request
  return axios(config)
    .then(response => {
      
        console.log(response)
      return response.data;
    })
    .catch(error => {
      // Handle the error
      console.error("Error in AjaxRequest:", error);
      throw error; // Rethrow or handle it accordingly
    });
}

export default AjaxRequest;
