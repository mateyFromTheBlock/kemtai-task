import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import ScoreBar from './ScoreBar';

const useStyles = makeStyles(() => ({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '20%',
    backgroundColor: '#2a2a2a',
    paddingBottom: 10,
  },
}));

const ScoreFooter = ({ setScore, timeOfMove, scoreOfMove }) => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="space-evenly"
      alignItems="flex-end"
      className={classes.container}
    >
      {scoreOfMove.map((score, index) => (
        <ScoreBar
          key={`${score}${index}`}
          score={score}
          timeout={timeOfMove[index] * 1000}
          setScore={setScore}
        />
      ))}
    </Grid>
  );
};

export default ScoreFooter;
