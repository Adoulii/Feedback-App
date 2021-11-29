import React from "react";
function ReplyButton({ text }) {
  return (
    <div>
      <button className="py-2 px-4 flex font-bold justify-end  bg-pink-100 text-white focus:outline-none hover:opacity-70 rounded-lg transition duration-300  font-Jost ">
        {text}
      </button>
    </div>
  );
}

export default ReplyButton;
