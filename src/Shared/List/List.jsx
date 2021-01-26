import React, { useContext, useEffect } from 'react';
import { makeStyles, Paper, Grid } from '@material-ui/core';
import ListItem from './components/ListItem/ListItem';
import { FilmsContext } from '../../Contexts/FilmsContext';
import { PeopleContext } from '../../Contexts/PeopleContext';
import { ViewContext } from '../../Contexts/ViewContext';
import { VIEWS } from '../../Constants/constants';
import BackButton from '../Button/Button';
import Loader from '../Loader/Loader';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const List = props => {
  const filmContext = useContext(FilmsContext);
  const peopleContext = useContext(PeopleContext);
  const viewContext = useContext(ViewContext);
  const changeView = viewContext.changeView;
  const view = viewContext.view;
  // conditionally set items based on react router view here
  let items;
  if (viewContext.view === VIEWS.character_list_view) {
    items = Object.values(peopleContext.people);
  } else {
    items = filmContext.results || [];
  }
  const renderList = (items = []) => {
    return items.map((item, i) => {
      return renderListItem(item, i);
    })
  }

  const renderListItem = (item, i) => {
    return <Grid key={i} item xs={12} sm={4}>
      <Paper className={classes.paper}><ListItem view={view} changeView={changeView} item={item} /></Paper>
    </Grid>
  }

  useEffect(() => {
  }, [])
  const classes = useStyles();
  return (
    <div>
      {view !== VIEWS.movie_list_view && <BackButton />}
      {items && items.length > 0 ? <div className={classes.root}><Grid container spacing={4}>{renderList(items)}</Grid></div> : <div><Loader /></div>}
    </div>
  );
};

export default List;