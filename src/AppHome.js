// import logo from './logo.svg';
import './App.css';
// import BubblyBG from './BubblyBG';
import React, { useState, useEffect} from "react";
import Fab from '@material-ui/core/Fab';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import ProjectCard from"./ProjectCard";
// import Grid from '@material-ui/core/Grid';
// import { makeStyles } from '@material-ui/core/styles';
// import * as Scroll from 'react-scroll';
// import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

// var Scroll = require('react-scroll');
// var scroll = Scroll.animateScroll;
// import { AnimatePresence } from "framer-motion";
// import { Header } from "./Header";
// import { Item } from "./Item";
// import { List } from "./List";
// import { BrowserRouter as Router, Route } from "react-router-dom";


import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';





import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
// import InstagramIcon from '@material-ui/icons/Instagram';
// import FacebookIcon from '@material-ui/icons/Facebook';

// function Store({ match }) {
//   let { id } = match.params;
//   const imageHasLoaded = true;

//   return (
//     <>
//       <List selectedId={id} />
//       <AnimatePresence>
//         {id && imageHasLoaded && <Item id={id} key="item" />}
//       </AnimatePresence>
//     </>
//   );
// }

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

// const useStyles = makeStyles((theme) => ({
//   appBar: {
//     position: 'relative',
//   },
//   title: {
//     marginLeft: theme.spacing(2),
//     flex: 1,
//   },
// }));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


function AppHome() {
  // const prevScrollY = useRef(0);
  const [goingUp] = useState(false);
  const theme = useTheme();  
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const isLarge = useMediaQuery(theme.breakpoints.down('lg'));

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


    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    
  return (
    <div id="root" className="App">
      {/* <div id="background">
        <div id="threejsCanvas"><CanvasBGWhite></CanvasBGWhite></div>
      </div> */}
      
      <div className="content" >
        <div className="section" id="home">
          <div id="name">
            <div id="tag">
            Hi, I am Kyzyl Monteiro, a creative technology enthusiast.<br/> I enjoy studying, designing, and developing interactive and immersive technology. <br />

            {/* { isSmall && 
              <div>

                <a className="hlink" onClick={handleClickOpen} style={{color:"#ec644b",textDecoration: "none" , pointerEvents:"all", cursor: "inherit"}} href="https://app.pitch.com/app/presentation/f924e4b4-9a55-447c-87ff-b4b062fce14f/7c1519e1-510d-415c-a83a-5cd5f47e387c" target="_blank" rel="noreferrer">Portfolio</a>  |   <a className="hlink"  style={{color:"#ec644b",textDecoration: "none" , pointerEvents:"all", cursor: "inherit"}} href="http://bit.ly/kyzyl_resume" target="_blank" rel="noreferrer"> Resume</a>
                
              </div>
            } */}
            <a className="hlink" onClick={handleClickOpen} style={{color:"#ec644b",textDecoration: "none" , pointerEvents:"all", cursor: "inherit"}} href="https://app.pitch.com/app/presentation/f924e4b4-9a55-447c-87ff-b4b062fce14f/7c1519e1-510d-415c-a83a-5cd5f47e387c" target="_blank" rel="noreferrer">Portfolio</a>  |   <a className="hlink"  style={{color:"#ec644b",textDecoration: "none" , pointerEvents:"all", cursor: "inherit"}} href="http://bit.ly/kyzyl_resume" target="_blank" rel="noreferrer"> Resume</a>
            {/* { !isSmall && 
              <div>

                <span className="hlink" onClick={handleClickOpen} style={{color:"#ec644b",textDecoration: "none" , pointerEvents:"all", cursor: "inherit"}} target="_blank" rel="noreferrer">Portfolio</span>  |   <a className="hlink"  style={{color:"#ec644b",textDecoration: "none" , pointerEvents:"all", cursor: "inherit"}} href="http://bit.ly/kyzyl_resume" target="_blank" rel="noreferrer"> Resume</a>
                
                { isLarge && <Dialog open={open} fullWidth="true" maxWidth="l" onClose={handleClose} TransitionComponent={Transition}  style={{borderRadius:"20px"}}>
                <iframe title="Kyzyl Portfolio - Pitch" src="https://pitch.com/embed/7c1519e1-510d-415c-a83a-5cd5f47e387c" width="100%" height="775"></iframe>
                </Dialog>}
                
                { !isLarge && <Dialog open={open} fullWidth="true" maxWidth="xl" onClose={handleClose} TransitionComponent={Transition}  style={{borderRadius:"20px"}}>
                <iframe title="Kyzyl Portfolio - Pitch" src="https://pitch.com/embed/7c1519e1-510d-415c-a83a-5cd5f47e387c" width="100%" height="1080"></iframe>
                </Dialog>}
                
              </div>
            } */}

           </div>
            
          </div>
          <div style={{bottom:"0", right:"0", position:"absolute"}}>
          <Fab style={{display:"block"}} id="contactButton" href="https://www.youtube.com/channel/UCYOqw_ae8clkq_LSxUeOq0Q" target="_blank" aria-label="yt">
              <YouTubeIcon />
            </Fab>
            <Fab style={{display:"block"}} id="contactButton" href="https://github.com/kyzylmonteiro" target="_blank" aria-label="git">
              <GitHubIcon />
            </Fab>
            <Fab style={{display:"block"}} id="contactButton" href="https://twitter.com/kyzylmonteiro" target="_blank" aria-label="twt">
              <TwitterIcon />
            </Fab>
            <Fab style={{display:"block"}} id="contactButton" href="https://www.linkedin.com/in/kyzylmonteiro/" target="_blank" aria-label="li">
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
