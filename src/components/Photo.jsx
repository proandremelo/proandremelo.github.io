import React from "react";
import profileImage from '../images/profile.png'

import '../styles/Photo.css'

function Photo() {
  return(
    <img alt="profile" src={profileImage} />
  );
}

export default Photo;
