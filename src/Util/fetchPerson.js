const fetchPerson = (personUrl) => {
  return fetch(personUrl)
    .then((data) => {
      return data.json();
    }).catch((err) => {
      console.warn('API is down :(');
    });
}

export default fetchPerson;