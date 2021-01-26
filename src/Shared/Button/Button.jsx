import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { VIEWS } from '../../Constants/constants';
import { ViewContext } from '../../Contexts/ViewContext';
import { PeopleContext } from '../../Contexts/PeopleContext';

const BackButton = () => {
  const viewContext = useContext(ViewContext);
  const peopleContext = useContext(PeopleContext);

  return <Button onClick={() => {
    viewContext.handleBack(viewContext.view);
    if (viewContext.view === VIEWS.character_list_view) {
      peopleContext.clearPeople();
    }
  }}
    color="secondary" size='large'>Back</Button>;
}

export default BackButton;