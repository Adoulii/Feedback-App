import React from 'react'
import PropTypes from 'prop-types';
function Button({text}) {
    return (
        <button className="bg-gray-200 rounded-lg text-sm font-medium px-4 py-2 text-blue-100 hover:bg-gray-100 active:bg-blue-800 active:text-white ">
          {text}
        </button>
    )
    Button.ReactPropTypes= {
        text: PropTypes.string
    }
}

export default Button
