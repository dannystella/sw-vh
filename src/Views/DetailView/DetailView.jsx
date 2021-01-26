import React, { useContext } from 'react';
import { makeStyles, Card, Avatar, CardContent, Typography } from '@material-ui/core';
import BackButton from '../../Shared/Button/Button';
import { PeopleContext } from '../../Contexts/PeopleContext';
import Troop from '../../Assets/Pictures/troop.jpg';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const DetailView = props => {
  const peopleContext = useContext(PeopleContext);
  const currentPerson = peopleContext.currentPerson;
  const classes = useStyles();
  return (
    <div>
      <BackButton />
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} variant='h6' color="textPrimary" gutterBottom>
            Name: {currentPerson.name}
          </Typography>
          <Avatar style={{ margin: 'auto', height: '65px', width: '65px' }} src={Troop} sizes='lg' />
          <Typography className={classes.title} variant='h6' color="textPrimary" gutterBottom>
            Birth Year: {currentPerson.birth_year}
          </Typography>
          <Typography className={classes.title} variant='h6' color="textPrimary" gutterBottom>
            Height: {currentPerson.height}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default DetailView;
