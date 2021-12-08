import React from "react";
import { Link } from "react-router-dom";
import "../style.css";
import Label from "./ui/Label";
import Input from "./ui/Input";
import DropDown from "./ui/DropDown";
import { motion } from "framer-motion";
import ButtonLink from "./ui/ButtonLink";
import TextArea from "./ui/TextArea";
import ButtonSubmit from "./ui/ButtonSubmit";
function NewFeedback() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="grid grid-cols-9 py-16 h-full">
        <div className="col-start-4 col-span-3 space-y-4 ">
          <ButtonLink />
          <form className="form bg-white h-auto px-10 py-4 space-y-2 overflow-hidden rounded-lg">
            <Label title="Feedback Title" />
            <p className="text-gray-800 text-ms font-Jost  ">
              Add a short, description headline
            </p>
            <Input placeholder="" />
            <Label title="Category" />
            <p className="text-gray-800 text-ms ">
              Choose a category for your feedback
            </p>
            <div class=" flex flex-col ">
              <DropDown
                options={["Feature", "UI", "UX", "Enhancement", "Bug"]}
              />
            </div>
            <Label title="Feedback Detail" />
            <TextArea />
            <div className="flex justify-end space-x-2 py-4 ">
              <Link
                to="/"
                className="py-3 px-4 bg-gray-800 text-white justify-start  focus:outline-none hover:opacity-50 rounded-lg transition duration-300 "
              >
                Cancel
              </Link>
              <ButtonSubmit text="Add Feedback" />
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default NewFeedback;
