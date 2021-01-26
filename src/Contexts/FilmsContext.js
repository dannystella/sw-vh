import React, { useState, useEffect } from 'react';
import fetchFilms from '../Util/fetchFilms';

export const FilmsContext = React.createContext();

export const FilmsProvider = props => {

  const [films, setFilms] = useState([]);
  useEffect(() => {
    fetchFilms()
      .then((data) => {
        data.json()
          .then((films) => {
            setFilms(films);
          })
      });
  }, [])
  return (
    <FilmsContext.Provider
      value={films}
    >
      {props.children}
    </FilmsContext.Provider>
  );
};

