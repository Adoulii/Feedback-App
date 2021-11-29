import React from "react";

function ButtonSubmit({ text }) {
  return (
    <div>
      <button className="px-4 py-3 font-bold bg-pink-100 justify-end text-white focus:outline-none hover:opacity-50 rounded-lg transition duration-300">
        {text}
      </button>
    </div>
  );
}

export default ButtonSubmit;
