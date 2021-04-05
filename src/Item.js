import {React, useState} from "react";
import { motion } from "framer-motion";
import { LoremIpsum } from "react-lorem-ipsum";
import { Link } from "react-router-dom";
import { items } from "./data";
import YoutubeEmbed from "./YoutubeEmbed";
import Fab from '@material-ui/core/Fab';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SubjectIcon from '@material-ui/icons/Subject';
import ClearIcon from '@material-ui/icons/Clear';
import BookIcon from '@material-ui/icons/Book';

export function Item({ id }) {
  const { category, title, details, yt, report} = items.find(item => item.id === id);
  const [video, setVideo] = useState(false);
  const [detailsToggle, setDetailsToggle] = useState(true);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: "auto" }}
        className="overlay"
      >
        <Link to="/about" />
      </motion.div>
      <div className="card-content-container open">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <img className="card-image" src={`../images/${id}.png`} alt="" />
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <span className="category">{category}</span>
            <span className="title">{title}</span>
          </motion.div>
          <motion.div className="content-container" animate>
            {video==true && <YoutubeEmbed embedId={yt} />}
            {detailsToggle==true &&  <p>{details}</p>}
            
          </motion.div>
          {video==false && 
              <Fab id="ytbutton" onClick={()=> {setVideo(!video); setDetailsToggle(false)}} style={{display: yt ? "inline-flex" : "none", backgroundColor: '#ec644b', color:'white', float:"right", margin: "2px"}}  aria-label="play">
                <PlayArrowIcon />
              </Fab>
            }
            {detailsToggle==false &&  
              <Fab id="dtbutton" onClick={()=> {setDetailsToggle(!detailsToggle); setVideo(false)}} style={{display: details ? "inline-flex" : "none", backgroundColor: '#ec644b', color:'white', float:"right", margin: "2px"}}  aria-label="description">
                <SubjectIcon />
              </Fab>
            }
            {report!=null &&  
              <Fab id="rbutton" href={report} target="_blank" style={{display: report ? "inline-flex" : "none", backgroundColor: '#ec644b', color:'white', float:"right", margin: "2px"}}  aria-label="description">
                <BookIcon />
              </Fab>
            }
        </motion.div>
      </div>
    </>
  );
}
