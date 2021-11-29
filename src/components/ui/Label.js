import React from "react";
function Label({ title }) {
  return (
    <div>
      <label className="text-gray-800 font-mono text-ms">{title}</label>
    </div>
  );
}

export default Label;
