import { Grid, Grow, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

const useStyles = makeStyles(() => ({
  barStyle: {
    width: '5%',
    backgroundColor: '#ffffff',
    opacity: 0.6,
    borderRadius: '30px',
  },
  dot: {
    height: 15,
    width: 15,
    backgroundColor: '#bbb',
    borderRadius: '50%',
  },
}));

const ScoreBar = ({ score, timeout, setScore }) => {
  const [height, setHeight] = useState(0);
  const classes = useStyles();

  useEffect(() => {
    if (timeout)
      setTimeout(() => {
        setHeight(score);
        setScore(score);
      }, timeout);
  }, []);

  return height > 0 ? (
    <Grow in={height > 0} timeout={500}>
      <Grid className={classes.barStyle} style={{ height: `${height}%` }} />
    </Grow>
  ) : (
    <span className={classes.dot} />
  );
};

export default ScoreBar;
