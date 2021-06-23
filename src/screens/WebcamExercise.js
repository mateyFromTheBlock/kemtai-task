import React, { useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import { Grid, makeStyles } from '@material-ui/core';
import { withRouter } from 'react-router';
import Circle from '../components/Circle';
import ScoreFooter from '../components/ScoreFooter';
import data from '../data/data.json';

// eslint-disable-next-line no-undef
const { innerWidth: width, innerHeight: height } = window;

const aspectRatio = height > width ? height / width : width / height;
const videoConstraints = {
  aspectRatio,
};

const EXERCISE_DURATION = 60; // seconds
const FULL_CIRCLE_ANGLE = 2 * Math.PI;
const RADIUS = (height * 0.12) / 2;

const { TimeOfMove, ScoreOfMove } = data;

const useStyles = makeStyles(() => ({
  container: { display: 'flex', width: '100%', position: 'absolute' },
  outerCircle: { opacity: 0.96 },
  innerCircle: { opacity: 0.8, position: 'absolute' },
  scoreContainer: {
    position: 'absolute',
    height: '12%',
    width: '28%',
    top: 5,
    left: 5,
    color: '#fff',
    fontSize: '3em',
    backgroundColor: '#2a2a2a',
    opacity: 0.96,
    borderRadius: '10px',
  },
}));

const WebcamExercise = ({ history }) => {
  const [counter, setCounter] = useState(0);
  const [score, setScore] = useState('--');
  const [isCameraAllowed, setIsCameraAllowed] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    if (!isCameraAllowed) return;

    setInterval(() => {
      setCounter((c) => c + 1);
    }, 1000);
  }, [isCameraAllowed]);

  useEffect(() => {
    if (counter === EXERCISE_DURATION) history.push('/thanks');
  }, [counter]);

  return (
    <>
      {isCameraAllowed && (
        <>
          <Grid container>
            <div className={classes.container}>
              <Circle
                id="outerCircle"
                radius={RADIUS}
                color="#2a2a2a"
                angle={FULL_CIRCLE_ANGLE}
                className={classes.outerCircle}
                xPos={width - RADIUS - 5}
                yPos={RADIUS + 5}
                sAngle={0}
              />
              <Circle
                id="innerCircle"
                radius={RADIUS * 0.76}
                color="#ffffff"
                angle={(counter / EXERCISE_DURATION) * FULL_CIRCLE_ANGLE - 0.5 * Math.PI}
                className={classes.innerCircle}
                xPos={width - RADIUS - 5}
                yPos={RADIUS + 5}
                sAngle={-0.5 * Math.PI}
              />
            </div>
            <Grid container alignItems="center" justify="center" className={classes.scoreContainer}>
              {score}
            </Grid>
          </Grid>

          <ScoreFooter setScore={setScore} scoreOfMove={ScoreOfMove} timeOfMove={TimeOfMove} />
        </>
      )}
      <Webcam
        videoConstraints={videoConstraints}
        width={width}
        height={height}
        onUserMedia={() => setIsCameraAllowed(true)}
      />
    </>
  );
};

export default withRouter(WebcamExercise);
