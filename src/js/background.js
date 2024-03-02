import React from "react";

const Background = () => {
  const imgs = ["1.png", "3.png", "5.jpeg", "6.jpeg"];
  const pickedImg = imgs[Math.floor(Math.random() * imgs.length)];
  return (
    <div>
      <img id="bg" src={`/img/${pickedImg}`} alt="배경"></img>
    </div>
  );
};

export default Background;
