import React from 'react';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  divContainer: { width: '85%', position: 'relative' },
  gridContainer: {
    position: 'absolute',
    height: '11.3%',
    width: '17%',
    top: '9%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    marginLeft: '3%',
    borderRadius: '10px',
    color: '#fff',
  },
  timeIcon: { marginLeft: '5%', fontSize: '82%' },
  textSize: { fontSize: '63%' },
  imgWidth: { width: '100%' },
  title: {
    position: 'absolute',
    marginTop: '14%',
    marginLeft: '5%',
    color: '#fff',
    fontSize: 30,
    fontFamily: 'Gilroy-Bold',
  },
}));

const ExerciseLogo = ({ img, title, lengthText, onClick, selected }) => {
  const classes = useStyles();
  return (
    <div
      onMouseUp={onClick}
      role="button"
      tabIndex={0}
      className={classes.divContainer}
      style={{
        opacity: !selected || selected === title ? 1 : 0.1,
      }}
    >
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
        className={classes.gridContainer}
      >
        <AccessTimeIcon className={classes.timeIcon} />
        <span className={classes.textSize}>{lengthText}</span>
      </Grid>
      <span className={classes.title}>{title}</span>
      <img src={img} alt={img} className={classes.imgWidth} />
    </div>
  );
};

export default ExerciseLogo;
