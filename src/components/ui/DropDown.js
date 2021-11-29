import React from "react";
function DropDown({ options }) {
  return (
    <select className="block w-full bg-indigo-50 text-grey-darker border border-grey-lighter focus:outline-none rounded-md h-10 px-4 md:w-full focus:ring-blue-500 focus:ring-2 focus:ring-opacity-50 focus:bg-indigo-100 focus:shadow-inner">
      {options.map((e, i) => (
        <option value={e.toLowerCase()} key={i} className="">
          {e}
        </option>
      ))}
    </select>
  );
}

export default DropDown;
