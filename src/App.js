import React, { useState, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AppHome from './AppHome';
import AppAbout from './AppAbout';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CanvasBGWhite from './CanvasBGWhite';
import { HashLink } from 'react-router-hash-link'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

export default function App() {
    const classes = useStyles();  
  return (
    <Router>
        <div id="nav">
            <AppBar style={{ background: 'rgba( 255, 255, 255, 0.15 )',    boxShadow: 'none', border:"none", backdropFilter: 'blur( 5.0px )' }}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                    Kyzyl Monteiro
                    </Typography>
                    <Button style={{color: '#ec644b'}} component={Link} to="/">Home</Button>
                    <Button style={{color: '#ec644b'}} component={Link} to="/about">About</Button>
                    <Button style={{color: '#ec644b'}} component={HashLink} to="/about#projects">Projects</Button>
                </Toolbar>
            </AppBar>
        </div>
        <div id="backgroundNoPointer">
            <div id="threejsCanvas"><CanvasBGWhite></CanvasBGWhite></div>
        </div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/about#projects">Projects</Link>
            </li>
          </ul>
        </nav> */}
       {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <AppAbout />
          </Route>
          <Route path="/">
            <AppHome />
          </Route>
        </Switch>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}