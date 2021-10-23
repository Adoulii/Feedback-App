import { CheckCircleIcon, TrashIcon } from '@heroicons/react/solid'
import React from 'react'
import {Link } from "react-router-dom";
import "../divstyle.css"
function Sidebar() {
    return (

<body className="min-h-screen bg-gray-200">
           <div className=" pb-2 lg:pb-0 w-60 -my-32 mx-40 lg:max-w-sm px-3 flex flex-row lg:flex-col flex-wrap lg:flex-nowrap">
              <div className="intro bg-gray-800 w-60 h-36 min-h-0 min-w-0 mb-4 rounded-lg">
               <p className="text-white font-medium mt-16 text-center -ml-10">
                   Front end Mentor
               </p>
               <p className="text-white text-center opacity-70 -ml-14">
                  Feedback Board
               </p>
               </div>
                <div className="bg-white w-60 h-36 min-h-0 min-w-0 mb-4 rounded-lg">
                    <button className="  bg-gray-200 rounded-lg w-12 h-8 text-sm font-medium ml-5 mt-4    text-blue-100 center hover:bg-gray-100 active:bg-blue-800"  >
                        All
                    </button>
                    <button className=" bg-gray-200 rounded-lg w-10 h-8 text-sm font-medium ml-2 mt-4 text-blue-100 center hover:bg-gray-100 active:bg-blue-800"  >
                        UI
                    </button>
                    <button className=" bg-gray-200 rounded-lg w-10 h-8 text-sm font-medium ml-2 mt-auto text-blue-100 center hover:bg-gray-100 active:bg-blue-800"  >
                        UX
                    </button>
                    <button className=" bg-gray-200 rounded-lg w-24 h-8 text-sm font-medium ml-5 mt-4 text-blue-100 center hover:bg-gray-100 active:bg-blue-800 "  >
                        Enhancement
                    </button>
                    <button className=" bg-gray-200 rounded-lg w-12 h-8 text-sm font-medium ml-2 mt-4 text-blue-100 center hover:bg-gray-100 active:bg-blue-800"  >
                        Bug
                    </button>
                    <button className=" bg-gray-200 rounded-lg w-20 h-8 text-sm font-medium ml-5 mt-2 text-blue-100 center hover:bg-gray-100 active:bg-blue-800"  >
                        Feature
                    </button>
                 </div>
                 <div className="bg-white w-60 h-36 min-h-0 min-w-0 mb-4 rounded-lg">

                 <p className="text-black font-bold text-center mt-5 font-mono">
                     RoadMap
               </p>
               <div classname="space-x-4 mt-5">
               <CheckCircleIcon className="inline-block ml-4 h-4 w-6 text-yellow-600"/>
               <p className="inline-block ml-5 text-sm">Planned</p>
               <p className="float-right mr-5 inline-block text-sm">0</p>
               </div>
               <div classname="space-x-4">
               <CheckCircleIcon className="inline-block ml-4 h-4 w-6 text-purple-600"/>
               <p className="inline-block ml-5 text-sm">In-Progress</p>
               <p className="float-right mr-5 inline-block text-sm">0</p>
               </div>
               <div classname="space-x-4">
               <CheckCircleIcon className="inline-block ml-4 h-4 w-6 text-lg"/>
               <p className="inline-block ml-5 text-sm">Live</p>
               <p className="float-right mr-5 inline-block text-sm">0</p>
               </div>
               </div>
            </div>
            <div className="container bg-white mx-auto w-5/12 h-96 -my-96  p-3 border-solid rounded-lg">
                <TrashIcon className="text-gray-400 h-5 w-5 text-center"/>
              <h1 className="text-gray-400 text-center font-bold mb-5 mt-44">There is no Feedback yet.</h1>
              <p className="text-gray-400 text-center font-meduim leading-5  ">Got a suggestion? Found a bug thats needs to be squashed?
                  We love hearing about news ideas to improve our app
              </p>
              <button className="ml-52 py-2 px-4 bg-pink-100 text-white focus:outline-none hover:opacity-50 rounded-lg mt-5">
                   + Add Feedback
              </button>
             </div>
         </body>
    )
}

export default Sidebar
