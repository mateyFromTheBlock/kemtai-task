import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  wrapper: {
    backgroundColor: '#000',
    color: '#fff',
    display: 'flex',
    height: '100vh',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Gilroy-Bold',
    fontSize: 80,
  },
}));

const ThankYou = () => {
  const classes = useStyles();

  return <div className={classes.wrapper}>Thank You</div>;
};

export default ThankYou;
