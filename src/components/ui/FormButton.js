import React from "react";
import PropTypes from "prop-types";
function FormButton({ text, className }) {
  return (
    <button
      type="submit"
      className={"py-2 px-4 focus:outline-none rounded-lg " + className}
    >
      {text}
    </button>
  );

}

export default FormButton;
