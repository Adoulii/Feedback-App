import calcComments from "../utils/calcComments";
import { useState } from "react";
import Modal from "./Modal";
import { motion } from "framer-motion";
import Comment from "./Comment";
function Viewcom({ comments, setComments }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="numbercoms py-4 ">
        <span className="font-Poppins font-extrabold px-6 text-gray-800 text-lg ">
          {calcComments(comments) + " Comments"}
        </span>
      </div>
      {comments &&
        comments.map((val, i) => (
          <Comment key={i} val={val} setComments={setComments} />
        ))}
    </motion.div>
  );
}

export default Viewcom;
