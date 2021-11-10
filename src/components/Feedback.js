import React from "react";
import Button from "../Button/Button";
import PropTypes from "prop-types";

function Feedback({ upvotes, Text, Parag, butt, Comments }) {
  return (
    <div className="flex flex-row justify-between rounded-lg h-18 w-18 items-center bg-white-100 px-4 py-4">
      <div className="flex flex-row">
        <h1 className="px-4 text-sm bg-gray-200 h-5 mr-10 rounded-lg">
          {upvotes}
        </h1>
        <div className="">
          <a href="" className="font-extrabold text-lg text-gray-800 hover:underline ">
            {Text}
          </a>
          <p>{Parag}</p>
          <Button text={butt} />
        </div>
      </div>
      <div>
        <h1 className="font-bold">{Comments}</h1>
      </div>
    </div>
  );
  Feedback.prototype = {
    upvotes: PropTypes.string,
    Text: PropTypes.string,
    Parag: PropTypes.string,
    butt: PropTypes.string,
    Comments: PropTypes.number,
  };
}

export default Feedback;
