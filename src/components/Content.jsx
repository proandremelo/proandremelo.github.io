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
      <h2 className="proj-text">And these are some projects that I'm working on</h2>
      <div className="projects">
        <a
          target="_blank"
          rel="no noreferrer"
          href="https://trivia-andremelo.vercel.app/"
        >
          <img src={trivia} alt="trivia" />
        </a>
        <a
          target="_blank"
          rel="no noreferrer"
          href="https://star-wars-andremelo.vercel.app/"
        >
          <img src={starwars} alt="starwars" />
        </a>
        <a
          target="_blank"
          rel="no noreferrer"
          href="https://trybetunes-andremelo.vercel.app/"
        >
          <img src={trybetunes} alt="trybetunes" />
        </a>
      </div>
      <div className="icons">
        <a
          target="_blank"
          rel="no noreferrer"
          href="https://github.com/proandremelo"
        >
          <BsGithub className="github-icon" />  
        </a>
        <a
          target="_blank"
          rel="no noreferrer"
          href="https://www.linkedin.com/in/andremelodev/"
        >
          <AiFillLinkedin className="linkedin-icon" />
        </a>
      </div>
    </main>
  );
}

export default Content;
