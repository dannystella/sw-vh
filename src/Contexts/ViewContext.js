import React, { useState } from 'react';
import { VIEWS } from '../Constants/constants';

export const ViewContext = React.createContext();

export const ViewProvider = props => {

  const [view, setView] = useState(VIEWS.movie_list_view);

  const changeView = (view) => {
    setView(view);
  }

  const handleBack = (view) => {
    if (view === VIEWS.detail_view) {
      changeView(VIEWS.character_list_view);
    } else if (view === VIEWS.character_list_view) {
      changeView(VIEWS.movie_list_view);
    } else if (view === VIEWS.movie_list_view) {
      changeView(VIEWS.character_list_view);
    }
  }

  const handleImageClick = (viewData, peopleData, filmData) => {
    if (view === VIEWS.movie_list_view) {
      peopleData.onMovieClick(peopleData.currentCharacters);
      changeView(VIEWS.character_list_view);
    } else if (view === VIEWS.character_list_view) {
      changeView(VIEWS.detail_view);
    }
  }

  return (
    <ViewContext.Provider
      value={{
        view,
        changeView,
        handleBack,
        handleImageClick
      }}
    >
      {props.children}
    </ViewContext.Provider>
  );
};