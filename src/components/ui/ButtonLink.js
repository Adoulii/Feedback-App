import React from "react";
import { Link } from "react-router-dom";
function ButtonLink() {
  return (
    <div>
      <Link
        to="/"
        className="px-3 py-3 text-gray-800 rounded-lg cursor-pointer focus:outline-none text-lg font-bold hover:bg-gray-800 hover:text-white active:underline transition duration-300 "
      >
        Go back
      </Link>
    </div>
  );
}

export default ButtonLink;
