import React from "react";

const Quote = () => {
  const quotes = [
    {
      quote: "Rome is not built in a day.",
      author: "- Rome's story -",
    },

    {
      quote: "It ain't over till it's over.",
      author: "- Yogi Berra(American baseball player) -",
    },

    {
      quote: "Better the last smile than the first laughter.",
      author: "- Nancy Farmer -",
    },

    {
      quote: "From zero to hero.",
      author: "- Hercules -",
    },

    {
      quote: "Desperate triumphs over luck.",
      author: "- -",
    },

    {
      quote: "Believe you can and you’re halfway there.",
      author: "- -",
    },

    {
      quote: "All we have is now.",
      author: "- -",
    },

    {
      quote: "Life is a journey to be experienced, not a problem to be solved.",
      author: "- Winnie the pooh -",
    },

    {
      quote:
        "You can't be happy every day, but there are happy things every day.",
      author: "- Winnie the pooh -",
    },

    {
      quote: "Things that make me who I am make me special.",
      author: "- Winnie the pooh -",
    },

    {
      quote: "Look beyond what you see.",
      author: "- Lion King -",
    },

    {
      quote:
        "The past can hurt, but you can either run from it or learn from it.",
      author: "- Lion King -",
    },
    {
      quote:
        "The only thing we know is things don't always go the way we plan.",
      author: "- Lion King -",
    },
    {
      quote:
        "Success doesn't come for free. You have to do whatever it takes to seize your moment.",
      author: "- Lion King -",
    },
    {
      quote:
        "Every day, every minute, every second, you have a chance to change your life.",
      author: "- Dumbo -",
    },
    {
      quote:
        "I can't go back to yesterday. Because I was a different person then.",
      author: "- Alice in Wonderland -",
    },
    {
      quote: "If you do only what you can, you’ll never be better than now.",
      author: "- Kung Fu Panda -",
    },
  ];

  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return (
    <div id="quote" className="whiteText">
      <span>{todaysQuote.quote}</span>
      <span>{todaysQuote.author}</span>
    </div>
  );
};

export default Quote;
