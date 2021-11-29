import calcComments from "../utils/calcComments";
import { useState } from "react";
import Modal from "./Modal";
import { motion } from "framer-motion";
function Viewcom({ comments }) {
  const [showModal, setShowModal] = useState(false);
  function openModal() {
    setShowModal((prev) => !prev);
  }
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
          <div key={i} className="">
            <div className="comment px-6 flex flex-row justify-between ">
              <div className="flex flex-col">
                <h2 className="font-Jost font-extrabold text-gray-800 ">
                  {val.user.name}
                </h2>
                <a className="font-Jost text-xs hover:underline cursor-pointer text-gray-800 ">
                  @{val.user.username}
                </a>
              </div>
              <div>
                <button
                  onClick={openModal}
                  className="text-blue-700 font-extrabold hover:underline"
                >
                  Reply
                </button>
              </div>
            </div>
            <div className="content px-6 py-2">
              <span className="leading-snug text-gray-800">{val.content}</span>
            </div>
            <div className="reply px-6 py-2 ">
              <Modal showModal={showModal} setShowModal={setShowModal} />
            </div>
            {val.replies
              ? val.replies.map((reply) => <p className="reply">{}</p>)
              : ""}
            <div className="rounded-b-5"></div>
          </div>
        ))}
    </motion.div>
  );
}

export default Viewcom;
