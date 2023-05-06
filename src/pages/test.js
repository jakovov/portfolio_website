import React, { useEffect } from 'react';
// import $ from 'jquery';
import { useRef } from 'react';
import profilepic from '../assets/profile2.jpg';
import '../styles/About.css';

function ProfilePicture() {
  const pictureRef = useRef(null);

  useEffect(() => {
    const picture = pictureRef.current;
    const pictureWidth = picture.offsetWidth;
    const pictureHeight = picture.offsetHeight;

    const movePicture = (event) => {
      const mouseX = event.pageX;
      const mouseY = event.pageY;
      const centerX = picture.offsetLeft + pictureWidth / 2;
      const centerY = picture.offsetTop + pictureHeight / 2;
      const distanceX = mouseX - centerX;
      const distanceY = mouseY - centerY;
      const maxDistance = 5;
      const moveX = (distanceX / centerX) * maxDistance;
      const moveY = (distanceY / centerY) * maxDistance;

      picture.style.transform = `translate(${moveX}px, ${moveY}px) scale(1)`;
    };
    //   picture.style.pointerEvents = "auto"; 
    document.addEventListener("mousemove", movePicture);

    return () => {
      document.removeEventListener("mousemove", movePicture);
    };
  }, []);

  return (
    <div className="profile-picture-container">
      <img
        ref={pictureRef}
        src={profilepic}
        alt="Profile"
        className="profile-picture"
      />
    </div>
  );
}

export default ProfilePicture;