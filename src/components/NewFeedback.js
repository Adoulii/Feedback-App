import React from "react";
import { Link } from "react-router-dom";
import "../style.css";
function NewFeedback() {
  return (
    <div className="grid grid-cols-7 grid-rows-6 py-20 ">
      <div className="col-start-3 col-span-3 space-y-14 ">
        <div className="">
          <Link
            to="/"
            className="px-4 py-3 text-gray-800 rounded-lg cursor-pointer focus:outline-none text-lg font-bold hover:bg-gray-800 hover:text-white active:underline "
          >
            Go back
          </Link>
        </div>
        <div className="form bg-white h-auto px-4 py-4 space-y-10 overflow-hidden rounded-lg">
          <h1 className="text-gray-800 text-2xl font-bold font-mono">
            Create New Feedback
          </h1>
          <div className="flex flex-col">
            <label className="text-gray-800 font-mono text-ms">
              Feedback Title
            </label>
            <p className="text-gray-800 text-ms  ">
              Add a short, description headline
            </p>
            <input
              className="text-gray-700 h-10 bg-indigo-50 px-2 text-lg appearance-none rounded-md focus:outline-none focus:ring-blue-500 focus:ring-2 focus:ring-opacity-50 focus:bg-indigo-100 focus:shadow-inner"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-800 font-mono text-ms">Category</label>
            <p className="text-gray-800 text-ms ">
              Choose a category for your feedback
            </p>
            <div class=" flex flex-col ">
              <select class="block w-full bg-indigo-50 text-grey-darker border border-grey-lighter focus:outline-none rounded-md h-10 px-4 md:w-full focus:ring-blue-500 focus:ring-2 focus:ring-opacity-50 focus:bg-indigo-100 focus:shadow-inner ">
                <option value="">Feature</option>
                <option value="">UI</option>
                <option value="">UX</option>
                <option value="">Enhancement</option>
                <option value="">Bug</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-gray-800 font-mono text-ms">
            Feedback Detail
            </label>
            <p className="text-gray-800 text-ms  ">
            Include any specific comments on what should be improved, added, etc.
            </p>
            <textarea
              className="text-gray-700 bg-indigo-50 px-2 appearance-none rounded-md focus:outline-none focus:ring-blue-500 focus:ring-2 focus:ring-opacity-50 focus:bg-indigo-100 focus:shadow-inner"
              required
            />
          </div>
          <div className="flex justify-end ">
          <div>
          <button className="py-3 px-4 mr-3 bg-gray-800 text-white justify-start  focus:outline-none hover:opacity-50 rounded-lg ">
                   Cancel
              </button>
          <button className="px-4 py-3 bg-pink-100 justify-end text-white focus:outline-none hover:opacity-50 rounded-lg">
                  add Feedback
              </button>
            </div>  

          </div>
        </div>
      </div>
    </div>
  );
}

export default NewFeedback;
