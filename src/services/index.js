export const ENDPOINT = 'https://api.giphy.com/v1'
export const GET_TRENDING = `${ENDPOINT}/gifs/trending?api_key=${process.env.REACT_APP_API_KEY}&limit=50&rating=g`
export const GET_SEARCH = searchTerm =>
  `${ENDPOINT}/gifs/search?api_key=HjvvLv19smnnDbehOuisjLulGQsP3ZWf&q=${searchTerm}&limit=16&offset=0&rating=g&lang=en`
