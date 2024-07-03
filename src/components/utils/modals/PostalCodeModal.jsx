import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPinArea } from "@phosphor-icons/react";

const modalVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const PostalCodeModal = ({ closeModal }) => {
  return (
    <motion.div
      className="absolute w-full h-full bg-grey-o-500 z-10 flex justify-center items-center flex-col gap-4 p-4"
      variants={modalVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="flex flex-col justify-center items-center bg-white w-[50%] sm:w-full md:w-[50%] xl:w-[30%] h-50 rounded-xl gap-5">
        <div className="flex flex-col justify-center items-center gap-5 mt-10">
          <MapPinArea
            size={100}
            style={{
              color: "grey",
            }}
          />
          <h3 className="text-6xl sm:text-4xl ms:text-4xl">Oops!</h3>
          <span className="text-slate-400">
            Sorry! we do not serve at your area.
          </span>
        </div>
        <div className="w-full rounded-b-xl flex">
          <button
            className="w-50 text-white bg-brand-color-default flex-1 p-2 text-medium rounded-bl-xl"
            onClick={() => closeModal((prev) => !prev)}
          >
            Retry another
          </button>
          <Link
            className="w-50 text-white bg-brand-color-dark flex-1 p-3 text-large rounded-br-xl text-center"
            to={"locations/"}
          >
            See all
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PostalCodeModal;
