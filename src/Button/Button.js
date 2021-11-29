import React from 'react'
function Button({text,filter,className}) {
    return (
        <button onClick={()=> filter(text)} className={"bg-gray-200 font-Jost rounded-lg text-sm font-bold px-4 py-2 text-blue-100 hover:bg-gray-100 hover:border-indigo-200 active:bg-blue-700 active:text-white transition duration-300  focus:ring-2 border-2 border-transparent " + className}>
          {text}
        </button>
    )

}

export default Button
