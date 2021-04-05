import logo from './logo.svg';
import './App.css';
import CanvasBGWhite from './CanvasBGWhite';
import React, { useState, useEffect, useRef } from "react";
import Fab from '@material-ui/core/Fab';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ProjectCard from"./ProjectCard";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
// import * as Scroll from 'react-scroll';
// import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

// var Scroll = require('react-scroll');
// var scroll = Scroll.animateScroll;
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
// import { Header } from "./Header";
import { Item } from "./Item";
import { List } from "./List";
import { BrowserRouter as Router, Route } from "react-router-dom";


import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

function Store({ match }) {
  let { id } = match.params;
  const imageHasLoaded = true;

  return (
    <>
      <List selectedId={id} />
      <AnimatePresence>
        {id && imageHasLoaded && <Item id={id} key="item" />}
      </AnimatePresence>
    </>
  );
}

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



function AppHome() {
  const prevScrollY = useRef(0);
  const [goingUp, setGoingUp] = useState(false);

  useEffect(() => {
      
  // Detect Swipe Down (www.javascriptkit.com/javatutors/touchevents2.shtml)
  window.addEventListener('load', function(){
  
    var touchsurface = document.getElementById("background"),
        startX,
        startY,
        dist,
        threshold = 150, //required min distance traveled to be considered swipe
        allowedTime = 200, // maximum time allowed to travel that distance
        elapsedTime,
        startTime

        function handleswipe(down){
            if (down) {
                window.location.href = "#projects";
            }
        }

        touchsurface.addEventListener('touchstart', function(e){
            var touchobj = e.changedTouches[0]
            dist = 0
            startX = touchobj.pageX
            startY = touchobj.pageY
            startTime = new Date().getTime() // record time when finger first makes contact with surface
        })
        
        touchsurface.addEventListener('touchend', function(e){
            var touchobj = e.changedTouches[0]
            dist = startY - touchobj.pageY // get total dist traveled by finger while in contact with surface
            elapsedTime = new Date().getTime() - startTime // get time elapsed
            // check that elapsed time is within specified, horizontal dist traveled >= threshold, and vertical dist traveled <= 100
            var down = (elapsedTime <= allowedTime && dist >= threshold && Math.abs(touchobj.pageX - startX) <= 100)
            handleswipe(down)
        })

      })

    }, [goingUp]);
    
  const classes = useStyles();
  return (
    <div id="root" className="App">
      <div id="background">
        <div id="threejsCanvas"><CanvasBGWhite></CanvasBGWhite></div>
      </div>
      
      <div className="content" >
        <div className="section" id="home">
          <div id="name">
            Kyzyl Monteiro
            <div id="tag">
              Creative Developer & HCI Researcher
            </div>
            <Fab id="contactButton" href="https://www.youtube.com/channel/UCYOqw_ae8clkq_LSxUeOq0Q" target="_blank" aria-label="yt">
              <YouTubeIcon />
            </Fab>
            <Fab id="contactButton" href="https://github.com/kyzylmonteiro" target="_blank" aria-label="git">
              <GitHubIcon />
            </Fab>
            <Fab id="contactButton" href="https://twitter.com/kyzylmonteiro" target="_blank" aria-label="twt">
              <TwitterIcon />
            </Fab>
            <Fab id="contactButton" href="https://www.linkedin.com/in/kyzylmonteiro/" target="_blank" aria-label="li">
              <LinkedInIcon />
            </Fab>
            {/* <Fab class="contactButton" color="primary" aria-label="add">
              <InstagramIcon />
            </Fab>
            <Fab class="contactButton" color="primary" aria-label="add">
              <FacebookIcon />
            </Fab> */}
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default AppHome;
