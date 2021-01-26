import React, { useContext } from 'react';
import { makeStyles, Grid, Paper, Typography, ButtonBase } from '@material-ui/core';
import { VIEWS } from '../../../../Constants/constants';
import MovieHash from '../../../../Assets/MovieHash';
import { PeopleContext } from '../../../../Contexts/PeopleContext';
import { ViewContext } from '../../../../Contexts/ViewContext';
import Trooper from '../../../../Assets/Pictures/troop.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
    backgroundColor: '#5a595a',
    justifyContent: 'center'
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const ListItem = ({ item, changeView, view }) => {
  const peopleContext = useContext(PeopleContext);
  const viewContext = useContext(ViewContext);
  const handleImageClick = viewContext.handleImageClick;
  const clearPeople = peopleContext.clearPeople;
  const onMovieClick = peopleContext.onMovieClick;
  const setCurrentPerson = peopleContext.setCurrentPerson;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography align='center' gutterBottom variant="subtitle1">
          {item.title || item.name}
        </Typography>
        <Grid justify="center" container spacing={1}>
          <Grid item>
            <ButtonBase onClick={((e) => {
              const viewData = {
                view
              }
              const peopleData = {
                clearPeople,
                currentCharacters: item.characters,
                onMovieClick,
                setCurrentPerson,
                currentPerson: item
              }
              if (view === VIEWS.character_list_view) {
                setCurrentPerson(item);
              }
              handleImageClick(viewData, peopleData);
            })} className={classes.image}>
              <img className={classes.img} alt="complex" src={MovieHash[item.episode_id] || Trooper} />
            </ButtonBase>
          </Grid>
        </Grid>
        <Typography variant="body2" style={{ cursor: 'pointer' }}>
          Click
        </Typography>
      </Paper>
    </div >
  );
}

export default ListItem;