import React from 'react';

import classes from './Navigation.module.css';

const Navigation = (props) => {// бул жерде биз жон гана жава скриптин билими менен бул компонентаны тузуп койгонбуз 
  return (
    <nav className={classes.nav}>
      <ul>
        {props.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};
//<button onClick={props.onLogout}>Logout</button>//logout басылганда onLogout иштейт ал App.js'те

export default Navigation;
