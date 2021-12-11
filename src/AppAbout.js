import React from "react";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { Item } from "./Item";
import { List } from "./List";
import { BrowserRouter as Router, Route } from "react-router-dom";

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

export default function AppAbout() {
  return (
    <div className="abtRoot">
      <div className="container">
        <div id="me" className="sectionTitle">About me</div>
        <div id="abtCard" style={{ overflow: "visible"}}>
           
            <div style={{display: "inline-block", textAlign: "justify", textJustify: "auto", fontSize: "17px", width:"90%", height:"100%", margin:"5% 5% 5% 5%",float:"left"}}>
            <img src="images\decentPicKyzyl.jpeg" alt="Pineapple" id="abtImg" ></img>
            Hey, I am Kyzyl Monteiro, a student HCI researcher at <a className="hlink" href="http://weave.iiitd.edu.in/" target="_blank" rel="noreferrer">Weave Lab, IIIT Delhi</a>. I am interested in creative technology, especially in studying, 
            designing, and developing interactive and immersive technology. I am currently pursuing a Dual Degree program at <a className="hlink" href="https://www.iiitd.ac.in" target="_blank" rel="noreferrer">IIIT Delhi</a>, Bachelors, and Masters in  <a className="hlink" href="https://www.iiitd.ac.in/academics/btech/csd" target="_blank" rel="noreferrer">Computer Science and Design</a>. At Weave Lab, I worked on my bachelor's thesis under <a className="hlink" href="https://amanparnami.com/" target="_blank" rel="noreferrer"> Dr. Aman Parnami </a>, studying how video streaming platforms keep us hooked. 
            Currently, I am studying Collaboration in Mixed Reality for my next project. I am also experimenting with AR development in Unity 
            and interactive 3D graphics on the web.
            </div>
           
          </div>
      </div>
      <div id="projects" className="container">
          <div className="sectionTitle">Selected Projects</div>
          <AnimateSharedLayout type="crossfade">
              <Router>
                  <Route exact path={["/about/:id", "/about"]} component={Store} />
              </Router>
          </AnimateSharedLayout>
      </div>
    </div>
  );
}