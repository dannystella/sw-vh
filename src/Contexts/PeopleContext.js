import React, { useState } from 'react';
import fetchPersonByMovie from '../Util/fetchPersonByMovie';

export const PeopleContext = React.createContext();

export const PeopleProvider = props => {

  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState({});

  const onMovieClick = (people) => {
    fetchPersonByMovie(people).then((peopleArray) => {
      setPeople(peopleArray);
    })
  }

  const setCurrentPerson = (person) => {
    setPerson(person);
  }

  const clearPeople = () => {
    setPeople([]);
  }

  return (
    <PeopleContext.Provider
      value={{
        people,
        onMovieClick,
        clearPeople,
        setCurrentPerson,
        currentPerson: person
      }}
    >
      {props.children}
    </PeopleContext.Provider>
  );
};
