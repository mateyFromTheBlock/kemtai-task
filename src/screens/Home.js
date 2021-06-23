import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { withRouter } from 'react-router';
import ExerciseLogo from '../components/ExerciseLogo';

const images = [
  {
    url: 'https://firebasestorage.googleapis.com/v0/b/kemtai-44af3.appspot.com/o/cardio.png?alt=media&token=b3c428c8-161c-4d6d-9ed2-51725339e494',
    title: 'Cardio',
    lengthText: '2 min',
  },
  {
    url: 'https://firebasestorage.googleapis.com/v0/b/kemtai-44af3.appspot.com/o/strength.png?alt=media&token=c5b89082-1b6a-439e-9d7e-6d07e18075da',
    title: 'Strength',
    lengthText: '2 min',
  },
  {
    url: 'https://firebasestorage.googleapis.com/v0/b/kemtai-44af3.appspot.com/o/flex.png?alt=media&token=99564e51-fda8-4292-8248-3178235ea3bf',
    title: 'Flexibility',
    lengthText: '2 min',
  },
];

const Home = ({ history }) => {
  const [selected, setSelected] = useState(null);
  return (
    <Grid
      container
      direction="column"
      justify="space-evenly"
      alignItems="center"
      style={{ backgroundColor: '#222229', height: '100vh', width: '100%' }}
      xl={4}
      sm={12}
    >
      <img
        alt="title"
        src="https://351pe8qlwlt15bwu1ez9tgob-wpengine.netdna-ssl.com/wp-content/themes/kemtai/images/klogo.svg"
      />
      <span style={{ color: '#fff', fontFamily: 'Gilroy-Bold', fontSize: 22 }}>
        Choose a short workout
      </span>
      {images.map(({ url, title, lengthText }) => (
        <ExerciseLogo
          onClick={() => {
            setSelected(title);
            setTimeout(() => history.push('/exercise'), 1000);
          }}
          key={url}
          img={url}
          title={title}
          lengthText={lengthText}
          selected={selected}
        />
      ))}
    </Grid>
  );
};

export default withRouter(Home);
