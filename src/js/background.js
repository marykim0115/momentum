import React from "react";
// import p1 from '../img/1.png'
// import p3 from '../img/3.png'
// import p5 from '../img/5.jpeg'
// import p6 from '../img/6.jpeg'

const Background = () => {
  //const imgs = [p1, p3, p5, p6];
  const imgs = ["1.png", "3.png", "5.jpeg", "6.jpeg"];
  const pickedImg = imgs[Math.floor(Math.random() * imgs.length)];
  return (
    <div id="bgDiv">
      <img src={`/img/${pickedImg}`} alt="배경"></img>
    </div>
  );
};

export default Background;
