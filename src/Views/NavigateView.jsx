import React, { useContext } from 'react';
import { VIEWS } from '../Constants/constants';
import { ViewContext } from '../Contexts/ViewContext';
import ListView from './ListView';
import DetailView from './DetailView';

const NavigateView = () => {
  const viewContext = useContext(ViewContext);
  const view = viewContext.view;
  switch (view) {
    case VIEWS.movie_list_view:
      return <ListView />
    case VIEWS.character_list_view:
      return <ListView />
    case VIEWS.detail_view:
      return <DetailView />
    default: return <ListView />
  }
}

export default NavigateView;