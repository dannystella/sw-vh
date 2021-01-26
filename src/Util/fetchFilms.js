import { ROOT, FILMS } from '../Constants/constants'

const fetchFilms = () => {
  return fetch(`${ROOT + FILMS} `)
    .then((data) => {
      return data;
    }).catch((err) => {
      console.warn('API is down :(');
    })
}

export default fetchFilms;