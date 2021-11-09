import React from "react";
import { Link } from "react-router-dom";
import "../style.css";
function NewFeedback() {
  return (
    <div className="grid grid-cols-7 grid-rows-6 py-20 ">
      <div className="col-start-3 col-span-3 space-y-14">
        <div className="">
          <Link
            to="/"
            className="px-4 py-3 text-gray-800 rounded-lg cursor-pointer focus:outline-none text-lg font-bold hover:bg-gray-800 hover:text-white active:underline "
          >
            Go back
          </Link>
        </div>
        <div className="form flex bg-white h-5/6 px-4 py-4 ">
          <h1 className="text-gray-800 font-bold font-mono">Create New Feedback</h1>
          <h1 className="text-gray-800 font-mono text-lg block">Feedback Title</h1>
        </div>
      </div>
    </div>
  );
}

export default NewFeedback;
