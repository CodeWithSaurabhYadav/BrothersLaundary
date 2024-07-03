import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import colors from "../assets/colors";

import { alphabers, postalCodesServed } from "../data";
import Reveal from "../components/utils/Reveal";

const LetterBox = ({ letter, setSetshowLetterLocation }) => {
  return (
    <motion.div
      onClick={() => setSetshowLetterLocation(letter)}
      variants={{
        initial: { background: colors["white"] },
        hover: {
          background: colors["brand-color-default"],
          color: colors["white"],
        },
      }}
      initial="initial"
      whileHover="hover"
      className={`w-10 h-10 text-2xl flex justify-center items-center hover:bg-brand-color-default text-black rounded-full border border-3`}
    >
      {letter}
    </motion.div>
  );
};

const LetterLocations = ({ letter }) => {
  if (!postalCodesServed.some((code) => code.area.startsWith(letter))) {
    return null;
  }

  return (
    <div className="w-fit sm:w-min md:w-[150px] lg:w-[200px] flex flex-col p-5">
      <h1 className="text-4xl font-bold text-left text-brand-color-default">
        {letter}
      </h1>
      <Reveal>
        <ul>
          {postalCodesServed
            .filter((code) => code.area.startsWith(letter))
            .map((code) => (
              <li key={code.postcode}>
                <span className="text-brand-color-default">{code.area}</span>
              </li>
            ))}
        </ul>
      </Reveal>
    </div>
  );
};

const Locations = () => {
  const [showLetterLocation, setSetshowLetterLocation] = useState(null);

  const toggleLetterLocation = (letter) => {
    if (showLetterLocation === letter) {
      setSetshowLetterLocation(null);
    } else {
      setSetshowLetterLocation(letter);
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="w-full flex flex-col justify-center items-center gap-5 p-5"
      >
        <h1 className="text-4xl font-bold text-center text-brand-color-default">
          Areas currently covered
        </h1>
        <div className="w-[50%] sm:w-full md:w-[75%] lg:w-[50%] flex flex-wrap gap-5 justify-center">
          {alphabers.split("").map((letter) => (
            <LetterBox
              key={letter}
              letter={letter}
              setSetshowLetterLocation={toggleLetterLocation}
            />
          ))}
          <LetterBox
            key={"*"}
            letter={"*"}
            setSetshowLetterLocation={() => setSetshowLetterLocation(null)}
          />
        </div>
        <hr
          style={{
            width: "70%",
            height: "2px",
            background: colors["brand-color-default"],
          }}
        />
        <div className="flex flex-wrap justify-center w-[80%]">
          {showLetterLocation === null ? (
            alphabers
              .split("")
              .map((letter) => <LetterLocations letter={letter} key={letter} />)
          ) : (
            <LetterLocations
              letter={showLetterLocation}
              key={showLetterLocation}
            />
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Locations;
