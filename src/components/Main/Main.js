import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, Grid } from '@material-ui/core';
import logo from '../../logo.svg'; // import your logo image

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  logo: {
    width: '200px',
    marginBottom: theme.spacing(4),
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(4),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

function LandingPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src={logo} alt="logo" className={classes.logo} />
      <Typography variant="h4" align="center">Welcome to My App</Typography>
      <div className={classes.buttonContainer}>
        <Button variant="contained" color="primary" className={classes.button}>
          Sign In
        </Button>
        <Button variant="contained" color="secondary" className={classes.button}>
          Sign Up
        </Button>
      </div>
    </div>
  );
}

export default LandingPage;
