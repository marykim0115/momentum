import React from "react";
import p1 from '../img/1.png'
import p1 from '../img/1.png'
import p1 from '../img/1.png'
import p1 from '../img/1.png'



const Background = () => {
  const imgs = [p1, "3.png", "5.jpeg", "6.jpeg"];
  const pickedImg = imgs[Math.floor(Math.random() * imgs.length)];
  return (
    <div id="bgDiv">
      <img src={`/img/${pickedImg}`} alt="배경"></img>
    </div>
  );
};

export default Background;
