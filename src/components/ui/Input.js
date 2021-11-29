import React from 'react'

function Input({onChange,type,value,className,placeholder}) {
    return (
        <input
              className={"text-gray-700 w-full  px-2 py-3 placeholder-gray-400 bg-indigo-50 rounded-md focus:outline-none focus:ring-blue-500 focus:ring-2 focus:ring-opacity-50 focus:bg-indigo-100 focus:shadow-inner"+className}
              onChange={onChange}
              type={type}
              value={value}
              placeholder={placeholder}
              required
            />
    )
}

export default Input
