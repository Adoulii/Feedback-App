import React from "react";
import Input from "./ui/Input";
import ReplyButton from "./ui/ReplyButton";
import { motion } from "framer-motion";

function Modal({ showModal, setShowModal }) {
  return (
    <>
      {showModal ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <div className="flex flex-col justify-end">
            <form className="py-2 space-y-2">
              <Input placeholder="Add comment" />
              <ReplyButton text="Post Reply" />
            </form>
          </div>
        </motion.div>
      ) : null}
    </>
  );
}

export default Modal;
