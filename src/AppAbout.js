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
        <div id="sectionTitle">About me</div>
        <div id="abtCard" style={{ overflow: "visible"}}>
            <div style={{display: "inline-block", textAlign: "justify", textJustify: "auto", width:"50%", height:"100%", margin:"6% 0% 3% 5%",float:"left"}}>
            Hey, I am Kyzyl Monteiro, a student HCI researcher at <a href="http://weave.iiitd.edu.in/" target="_blank">Weave Lab, IIIT Delhi</a>. I am interested in creative technology, especially in studying, 
            designing, and developing interactive and immersive technology. I am currently pursuing a Dual Degree course at <a href="https://www.iiitd.ac.in" target="_blank">IIIT Delhi</a>, Bachelors, and Masters in  <a href="https://www.iiitd.ac.in/academics/btech/csd" target="_blank">Computer Science and Design</a>. At Weave Lab, I worked on my bachelor's thesis under <a href="https://amanparnami.com/" target="_blank"> Dr. Aman Parnami </a>, studying how video streaming platforms keep us hooked. 
            Currently, I am studying Remote collaboration in Mixed Reality for my next project. I am also experimenting with AR development in Unity 
            and interactive 3D graphics on the web.
            </div>
            <img src="images\decentPicKyzyl.jpeg" alt="Pineapple" id="abtImg" ></img>
          </div>
      </div>
      <div id="projects" className="container">
          <div id="sectionTitle">Selected Projects</div>
          <AnimateSharedLayout type="crossfade">
              <Router>
                  <Route exact path={["/about/:id", "/about"]} component={Store} />
              </Router>
          </AnimateSharedLayout>
      </div>
    </div>
  );
}