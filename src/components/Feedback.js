import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { FaComment } from "react-icons/fa";

function Feedback({ upvotes, text, parag, butt, comments, id }) {
  return (

      <div className="flex flex-row justify-between h-18 w-18 items-center bg-white-100 px-4 py-4">
        <div className="flex flex-row">
          <h1 className="px-4 text-sm bg-gray-200 h-5 mr-10 rounded-lg font-Jost">
            {upvotes}
          </h1>
          <div className="">
            <Link
              to={"/feedview/" + id}
              className=" font-bold text-lg text-gray-800 hover:underline font-Jost "
            >
              {text}
            </Link>
            <p>{parag}</p>
            <Button text={butt} />
          </div>
        </div>
        <div className="flex flex-row">
          <div>
            <FaComment className="text-gray-300 inline-block mr-2" />
          </div>
          <div>
            <h1 className="font-bold font-Jost">{comments}</h1>
          </div>
        </div>
      </div>
  );
}

export default Feedback;
