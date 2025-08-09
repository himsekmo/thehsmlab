import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// ✅ Correct image mapping for all 26 letters
const letterMap = {
  A: { word: "Apple", img: "https://cdn-icons-png.flaticon.com/512/415/415733.png" },
  B: { word: "Baloon", img: "/images/balloon.png"},
  C: { word: "Cat", img: "https://cdn-icons-png.flaticon.com/512/616/616430.png" },
  D: { word: "Dog", img: "https://cdn-icons-png.flaticon.com/512/616/616408.png" },
  E: { word: "Egg", img: "/images/egg.png" },
  F: { word: "Flower", img: "/images/flower.png" },
  G: { word: "Giraffe", img: "/images/giraff.png" },
  H: { word: "House", img: "/images/house.png" },
  I: { word: "Ice Cream", img: "https://cdn-icons-png.flaticon.com/512/415/415739.png" },
  J: { word: "Juice", img: "https://cdn-icons-png.flaticon.com/512/415/415734.png" },
  K: { word: "Kite", img: "/images/kite.png" },
  L: { word: "Lion", img: "/images/lion.png" },
  M: { word: "Monkey", img: "/images/monkey.png" },
  N: { word: "Nest", img: "/images/nest.png" },
  O: { word: "Owl", img: "/images/owl.png" },
  P: { word: "Penguin", img: "images/penguin.png" },
  Q: { word: "Queen", img: "images/queen.png" },
  R: { word: "Rabbit", img: "images/rabbit.png" },
  S: { word: "Sun", img: "https://cdn-icons-png.flaticon.com/512/869/869869.png" },
  T: { word: "Tiger", img: "images/tiger.png" },
  U: { word: "Umbrella", img: "images/umbrells.png" },
  V: { word: "Violin", img: "images/violin.png" },
  W: { word: "Whale", img: "images/whale.png" },
  X: { word: "Xylophone", img: "images/xylophone.png" },
  Y: { word: "Yak", img: "images/yak2.png" },
  Z: { word: "Zebra", img: "images/zebra.png" },
};

const KeySpeaker = () => {
  const [currentLetter, setCurrentLetter] = useState(null);
  const [cardColor, setCardColor] = useState("#ffeb3b");
  const [voices, setVoices] = useState([]);

  const pastelColors = [
    "#FFB6C1", "#FFDAB9", "#E6E6FA", "#B0E0E6", "#98FB98",
    "#FFFACD", "#FFDEAD", "#E0FFFF", "#F5DEB3", "#FFCCE5"
  ];

  // Load voices when available
  useEffect(() => {
    const synth = window.speechSynthesis;

    const loadVoices = () => {
      const availableVoices = synth.getVoices();
      if (availableVoices.length > 0) {
        setVoices(availableVoices);
      }
    };

    synth.onvoiceschanged = loadVoices;
    loadVoices();
  }, []);

  const speakLetter = (letter) => {
    const synth = window.speechSynthesis;
    const word = letterMap[letter]?.word;
    if (!word) return;

    const utterLetter = new SpeechSynthesisUtterance(letter);
    const utterWord = new SpeechSynthesisUtterance(word);

    // const femaleVoice = voices.find(voice => {
    //   const name = voice.name.toLowerCase();
    //   return name.includes("female") || name.includes("zira") ||
    //          name.includes("samantha") || name.includes("helena") || name.includes("anna");
    // });
  const voices = synth.getVoices();
  const femaleVoices = voices.filter(voice => {
    // Common patterns in voice names for female voices
    // This is not exhaustive and might need adjustment based on available voices
    const nameLower = voice.name.toLowerCase();
    return nameLower.includes("female") ||
           nameLower.includes("zira") || // Microsoft Zira is a common female voice
           nameLower.includes("samantha") || // Apple Samantha is a common female voice
           nameLower.includes("helena") || // Another common female voice name
           nameLower.includes("anna"); // Another common female voice name
  });

  console.log("Available female voices:", femaleVoices);
    if (femaleVoices.length >0) {
      utterLetter.voice = femaleVoices[0];
      utterWord.voice = femaleVoices[0];

      utterLetter.volume = 1.0; // 🔊 Set loud volume
      utterWord.volume = 1.0;

// Optional: adjust pitch and rate as well
    utterLetter.pitch = 1.1;
    utterWord.pitch = 1.1;
    utterLetter.rate = .8;
    utterWord.rate = .8;
    }

    synth.cancel(); // Stop previous speech
    synth.speak(utterLetter);
    synth.speak(utterWord);
  };

  const handleKeyPress = (event) => {
    const key = event.key.toUpperCase();
    if (letterMap[key]) {
      setCurrentLetter(key);
      setCardColor(pastelColors[Math.floor(Math.random() * pastelColors.length)]);
      speakLetter(key);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  const letterInfo = currentLetter ? letterMap[currentLetter] : null;

  return (
    <div
      style={{
        minHeight: "70vh",
        background: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        fontFamily: "'Comic Sans MS', cursive, sans-serif",
        padding: "5px",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "20px", color: "#ff4081" }}>
        🎉 Press Any Letter 🎉
      </h1>
      {currentLetter && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          style={{
            background: cardColor,
            borderRadius: "20px",
            padding: "20px",
            width: "20%",
            minWidth: "200px",
            boxShadow: "0px 6px 15px rgba(0,0,0,0.2)",
          }}
        >
          <h2 style={{ fontSize: "5rem", margin: "10px 0" }}>{currentLetter}</h2>
          {letterInfo && (
            <>
            <motion.img
           key={letterInfo.img} // 👈 forces re-mount on image change
            src={letterInfo.img}
            alt={letterInfo.word}
            initial={{ scale: 0, opacity: 0, y: 20 }}
            animate={{ scale: [0.6, 1.4, 1], opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            style={{ width: "80%", maxWidth: "150px", marginBottom: "10px" }}/>
              {/* <img
                src={letterInfo.img}
                alt={letterInfo.word}
                style={{ width: "80%", maxWidth: "150px", marginBottom: "10px" }}
              /> */}
              <h3 style={{ fontSize: "1.5rem", marginTop: "10px" }}>{letterInfo.word}</h3>
            </>
          )}
        </motion.div>
      )}
      {!currentLetter && (
        <p style={{ fontSize: "1.2rem", color: "#333", marginTop: "20px" }}>
          👆 Press A–Z on your keyboard to see and hear letters!
        </p>
      )}
    </div>
  );
};

export default KeySpeaker;
