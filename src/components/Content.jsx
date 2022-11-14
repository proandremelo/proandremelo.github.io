import React from "react";

import '../styles/Content.css';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import trivia from '../images/trivia.jpg'
import trybetunes from '../images/Tunes.png'
import starwars from '../images/starwars.png'

function Content() {
  return(
    <main>
      <h1 className="introduction">Hi, I'm André!</h1>
      <h2>Frontend Developer, Musician and Nature lover</h2>
      <fieldset className="projects">
        <legend align="center">Projects</legend>
        <img src={trivia} alt="trivia" />
        <img src={starwars} alt="starwars" />
        <img src={trybetunes} alt="trybetunes" />
      </fieldset>
      <div className="icons">
        <BsGithub className="github-icon" />
        <AiFillLinkedin className="linkedin-icon" />
      </div>
    </main>
  );
}

export default Content;
