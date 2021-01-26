import fetchPerson from './fetchPerson';

const fetchPersonByMovie = (people) => {
  const peopleArr = Promise.all(people.map((person) => {
    return fetchPerson(person).then((personData) => {
      return personData;
    }).catch((err) => {
      console.warn('API is down :(');
    });
  }))
  return peopleArr;
}

export default fetchPersonByMovie;