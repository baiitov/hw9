import React from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const Home = (props) => { // бул жерде модалное окно тузуп жатабыз бирок isloggedin true болгондо иштейт
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
    </Card>
  );
};

export default Home;
