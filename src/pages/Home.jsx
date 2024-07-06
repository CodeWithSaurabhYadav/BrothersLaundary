import React, { useState, useRef } from "react";
import useSize from "../hooks/useSize";

import Reveal from "../components/utils/Reveal";

import { useNavigate } from "react-router-dom";

import HeroImage from "../assets/images/hero.jpg";
import { MagnifyingGlass } from "@phosphor-icons/react";

import { PostalCodeModal } from "../components/ui/modals";

import { postalCodesServed } from "../data";
import { AnimatePresence } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();
  const [windowWidth, windowHeight] = useSize();

  // console.log(windowWidth, windowHeight);
  
  const [pinCode, setPinCode] = useState("");
  const [searchHover, setSearchHover] = useState(false);

  const [setshowModal, setSetshowModal] = useState(false);

  const handleChange = (e) => {
    setPinCode(e.target.value);
  };

  const searchHoverHandler = () => {
    setSearchHover((prev) => !prev);
  };

  const searchPostalCodeHandler = () => {
    const postalCode = pinCode.toUpperCase();
    const postalCodeInfo = postalCodesServed.find(
      (code) => code.postcode === postalCode
    );
    if (postalCodeInfo) {
      navigate(`/locations/${postalCode}`);
    } else {
      setSetshowModal((prev) => !prev);
    }
  };

  return (
    <React.Fragment>
      <div
        style={{ height: "calc(100vh - 75px)" }}
        className="relative overflow-hidden z-2 bg-black"
      >
        <AnimatePresence mode="wait">
          {setshowModal && <PostalCodeModal closeModal={setSetshowModal} />}
        </AnimatePresence>
        <img
          src={HeroImage}
          alt="Hero"
          className="w-full blur-md z-[-1] opacity-[0.2]"
        />
        <div className="absolute flex flex-col gap-2 w-full h-full justify-center items-center top-0 left-0 w-1/2 text-center">
          <div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[75%] xl:w-[50%]">
            <Reveal>
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white">
                24 Hours{" "}
                <span className="text-brand-color-default">
                  &nbsp;Dry Cleaning & Laundry Service&nbsp;
                </span>
                in the UK
              </h1>
            </Reveal>
          </div>
          <div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[75%] xl:w-[50%]">
            <Reveal>
              <h3 className="text-medium md:text-1xl lg:text-2xl text-white mt-4">
                We provide professional, reliable, fast and inexpensive cleaning
                and laundry services. At Magicwand, We do all the cleaning at
                our own premises to guarantee the highest quality.
              </h3>
            </Reveal>
          </div>
          <div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[70%] xl:w-[50%] flex justify-center">
            <form
              className="w-[80%] sm:w-[80%] md:w-[75%] lg:w-[50%] sm:w-full md:w-[75%] xl:w-[75%] "
              onSubmit={(e) => {
                e.preventDefault();
                searchPostalCodeHandler();
              }}
            >
              <label className="relative block h-10 text-4xl p-3">
                <input
                  className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-1 md:py-2 lg:p-5 pl-3 md:pl-4 lg:pl-4 pr-[70px] pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-xl"
                  placeholder="Search for anything..."
                  type="text"
                  value={pinCode}
                  onChange={handleChange}
                />
                <span className="absolute top-[15px] md:top-[20px] lg:top-[20px] right-6 transition-all">
                  <MagnifyingGlass
                    size={windowWidth > 900 ? 50 : 30}
                    weight={searchHover ? "fill" : "regular"}
                    onClick={searchPostalCodeHandler}
                    onMouseEnter={searchHoverHandler}
                    onMouseLeave={searchHoverHandler}
                    className="cursor-pointer text-slate-400 hover:text-brand transition-all"
                  />
                </span>
              </label>
            </form>
          </div>
        </div>
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt blanditiis
        ipsum corrupti modi voluptatem nisi itaque dicta voluptates numquam quis
        debitis ducimus obcaecati error molestiae expedita incidunt, autem
        voluptate officiis aspernatur fugit quidem suscipit recusandae! Eveniet
        quaerat dolore ut eos illum doloribus nesciunt ipsa, a odio quia, nisi
        aperiam quisquam! Quasi corrupti necessitatibus non. Earum mollitia odio
        fugit cumque, nostrum quos officiis ipsam impedit voluptatibus
        recusandae eveniet esse sit omnis repellat alias. Voluptas, neque ab
        quisquam atque error temporibus ipsam ullam sequi ut illo voluptatum
        modi officia exercitationem quasi eaque voluptatibus quos dolorum
        voluptates repellat eum placeat rerum facilis nihil!
      </div>
    </React.Fragment>
  );
};

export default Home;
