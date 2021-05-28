import React, { useState} from "react";
// , useEffect, useRef 
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
import BubblyBG from './BubblyBG';
import { HashLink } from 'react-router-hash-link'
import "./App.css"
import AnimatedCursor from "react-animated-cursor"

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
    const [b,setB] = useState(true);
  return (
    <Router>
      <AnimatedCursor color='236,100,75' innerSize={10} outerSize={10} outerAlpha={0.3} innerScale={0.5} outerScale={4}/>
        <div id="nav">
            <AppBar style={{ background: 'rgba( 255, 255, 255, 0.15 )',    boxShadow: 'none', border:"none", backdropFilter: 'blur( 5.0px )' }}>
                <Toolbar>
                    <Typography style={{fontFamily: 'Krona One', color:"#ec644b", textAlign:"left", fontWeight:"bold", textDecoration:"none", cursor: "inherit"}} className={classes.title} onClick={()=>setB(true)} component={Link} to="/">
                     Kyzyl
                    </Typography>
                    {/* <Button style={{color: '#ec644b', fontFamily: "'Jura', sans-serif", fontWeight: "bold"}} >Home</Button> */}
                    <Button style={{color: '#ec644b', fontFamily: "'Jura', sans-serif", fontWeight: "bold", cursor: "inherit"}} onClick={()=>setB(false)} component={HashLink} to="/about#me">About</Button>
                    <Button style={{color: '#ec644b', fontFamily: "'Jura', sans-serif", fontWeight: "bold", cursor: "inherit"}} onClick={()=>setB(false)} component={HashLink} to="/about#projects">Projects</Button>
                    <Button style={{color: "white", backgroundColor: '#ec644b', fontFamily: "'Jura', sans-serif", fontWeight: "bold", margin:"10px", cursor: "inherit"}} href="http://bit.ly/kyzylsresume">Resume</Button>
                </Toolbar>
            </AppBar>
        </div>
        <div id={b ? "background" : "backgroundNoPointer"}>
            <div id="threejsCanvas"><BubblyBG></BubblyBG></div>
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
          <Route exact path="/about">
            <AppAbout />
          </Route>
          <Route exact path="/">
            <AppHome />
          </Route>
        </Switch>
    </Router>
  );
}

