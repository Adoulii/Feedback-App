import React from "react";

function TextArea({placeholder, value, setValue}) {
  return (
    <div>
      <textarea
        className="block w-full py-3 px-2 mt-2 text-gray-500 placeholder-gray-400 placeholder-opacity-60 bg-indigo-50 rounded-md  bg-opacity-50  focus:outline-none focus:bg-indigo-100 focus:shadow-inner focus:ring-2 focus:bg-opacity-80 "
        rows="3"
        value={value}
        onChange={e=>setValue(e.target.value)}
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default TextArea;
