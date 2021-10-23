import { ChevronLeftIcon } from '@heroicons/react/solid'
import React from 'react'
import "../style.css"
import { Link } from 'react-router-dom'

function Create() {
    return (
        <div class="md:py-12 md:px-52 bg-indigo-100 flex flex-row flex-wrap">
            <div className="space-x-4  hover:text-white">
                <Link to="/" className="test absolute cursor-pointer inline-block py-2 px-4 focus:outline-none rounded-lg mt-5 ml-10">
                <ChevronLeftIcon className="inline-block h-6 w-6 mr-1 "/>Go back
                   
                    </Link>
            </div>
           <div class="md:w-1/2-screen mt-12 my-16 ml-56 p-3 bg-white w-7/12 tw-h-full shadow md:rounded-lg ">
               <p className="text-left font-mono font-bold text-gray-700 mb-5 p-5 text-xl">Create New Feedback</p>
               <h1 className="text-left font-mono pl-5 text-lg ">Feedback Title</h1>
               <p className="text-left font-mono text-sm pl-5 text-gray-600 mb-4 ">Add a short, description headline</p>
               <input className="block ml-5 pl-5 w-11/12 p-5 mt-2 text-gray-700 bg-indigo-50 appearance-none rounded-md focus:outline-none focus:ring-blue-500 focus:ring-2 focus:ring-opacity-50 focus:bg-indigo-100 focus:shadow-inner" required />
               <h1 className="text-left font-mono pl-5 text-lg mt-5 ">Category</h1>
               <p className="text-left font-mono text-sm pl-5 text-gray-600 mb-4 ">Choose a category for your feedback</p>
               <div class="w-11/12 flex flex-col mb-3">
               <select class="block w-full ml-5 bg-indigo-50 text-grey-darker border border-grey-lighter focus:outline-none rounded-md h-10 px-4 md:w-full focus:ring-blue-500 focus:ring-2 focus:ring-opacity-50 focus:bg-indigo-100 focus:shadow-inner " >
                  <option value="" className="focus:outline-none">Feature</option>
                  <option value="">UI</option>
                  <option value="">UX</option>
                  <option value="">Enhancement</option>
                  <option value="">Bug</option>
                </select>
               </div>
               <h1 className="text-left font-mono pl-5 text-lg mt-5 ">Feedback Detail</h1>
               <p className="text-left font-mono text-sm pl-5 text-gray-600 mb-4 ">Include any specific comments on what should be improved, added, etc.</p>
               <textarea className="block ml-5 pl-5 w-11/12 p-5 mt-2 h-28 min-h-[100px] max-h-[300px] text-gray-700 bg-indigo-50 appearance-none rounded-md focus:outline-none focus:ring-blue-500 focus:ring-2 focus:ring-opacity-50 focus:bg-indigo-100 focus:shadow-inner" required />
               <div class="mt-5 text-right mr-6 md:space-x-3 md:block flex flex-col-reverse">
               <button className="py-2 px-4  bg-gray-800 text-white focus:outline-none hover:opacity-50 rounded-lg mt-5">
                   Cancel
              </button>
              
               <button className="py-2 px-4 bg-pink-100 text-white focus:outline-none hover:opacity-50 rounded-lg mt-5">
                   + Add Feedback
              </button>
           </div>


           </div>

        </div>
    )
}

export default Create
