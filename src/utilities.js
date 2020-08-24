import axios from 'axios'

export const getStarships = (url, starships, resolve, reject) => {
  
  axios.get(url)
    .then(response => {
      const retrievedStarships = starships.concat(response.data.results)
      if (response.data.next !== null) {
        let securedRequest = (response.data.next).substring(0, 4) + "s" + (response.data.next).substring(4);
        console.log(securedRequest);
        getStarships(securedRequest, retrievedStarships, resolve, reject)
      } else {
        resolve(retrievedStarships)
      }
    })
    .catch(error => {
      console.log(error)
      reject('Something wrong. Please refresh the page and try again.')
    })
}