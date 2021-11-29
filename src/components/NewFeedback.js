import React from "react";
import { Link } from "react-router-dom";
import "../style.css";
import Label from "./ui/Label";
import Input from "./ui/Input";
import DropDown from "./ui/DropDown";
import { motion } from "framer-motion";
function NewFeedback() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="grid grid-cols-7 py-20">
        <div className="col-start-3 col-span-3 space-y-14 ">
          <div className="">
            <Link
              to="/"
              className="px-4 py-3 text-gray-800 rounded-lg cursor-pointer focus:outline-none text-lg font-bold hover:bg-gray-800 hover:text-white active:underline transition duration-300 "
            >
              Go back
            </Link>
          </div>
          <div className="form bg-white h-auto px-4 py-4 space-y-10 overflow-hidden rounded-lg">
            <h1 className="text-gray-800 text-2xl font-bold font-mono">
              Create New Feedback
            </h1>
            <div className="flex flex-col">
              <Label title="Feedback Title" />
              <p className="text-gray-800 text-ms  ">
                Add a short, description headline
              </p>
              <Input />
            </div>
            <div className="flex flex-col">
              <Label title="Gategory" />
              <p className="text-gray-800 text-ms ">
                Choose a category for your feedback
              </p>
              <div class=" flex flex-col ">
                <DropDown
                  options={["Feature", "UI", "UX", "Enhancement", "Bug"]}
                />
              </div>
            </div>

            <div className="flex flex-col">
              <Label title="Feedback Detail" />
              <p className="text-gray-800 text-ms  ">
                Include any specific comments on what should be improved, added,
                etc.
              </p>
              <textarea
                className="text-gray-700 bg-indigo-50 px-2 appearance-none rounded-md focus:outline-none focus:ring-blue-500 focus:ring-2 focus:ring-opacity-50 focus:bg-indigo-100 focus:shadow-inner"
                required
              />
            </div>
            <div className="flex justify-end ">
              <div>
                <Link
                  to="/"
                  className="py-3 px-4 mr-3 bg-gray-800 text-white justify-start  focus:outline-none hover:opacity-50 rounded-lg transition duration-300 "
                >
                  Cancel
                </Link>
                <button className="px-4 py-3 bg-pink-100 justify-end text-white focus:outline-none hover:opacity-50 rounded-lg transition duration-300">
                  add Feedback
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default NewFeedback;
