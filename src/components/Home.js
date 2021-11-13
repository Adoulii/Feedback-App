import React,{useEffect, useState} from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { LightBulbIcon, ChevronDownIcon } from "@heroicons/react/solid";
import Feedback_list from "./Feedback_list";
import { productRequests } from "../data.json";
import filter from "./Feedback_list";
import "../divstyle.css";

function Home() 
{
  
  const [filtredFeedback, setFiltredFeedback] = useState(productRequests.slice(0,6));
  const [error , setError] = useState('');


  
  const filter = (text) => {
    setError('');
    if (text === "All")
    {
      setFiltredFeedback(productRequests.slice(0,6));
    }
    else{
      const filtredfeeds = productRequests.filter(
        (item) => item.ux.toLowerCase() === text.toLowerCase()
      ).slice(0,6)
      
      if(!filtredfeeds.length) {
        setError('No data found')
      }
      setFiltredFeedback(filtredfeeds);
    }
  };


  return (

    <div className="grid grid-cols-6 grid-rows-6 gap-2 py-20">
      <div className=" col-start-2 space-y-5 ">
        <div className="intro h-32 bg-gray-800 rounded-lg py-6 px-6 ">
          <p className="text-white font-bold text-left">Front end Mentor</p>
          <p className="text-white text-left opacity-70">Feedback Board</p>
        </div>

        <div className="flex flex-wrap bg-white rounded-lg px-5 py-6 space-x-1 space-y-2">
          {["All",'Enhancement', 'UX', 'UI', 'Bug', 'Feature'].map((cat, i) => {
            return <Button key={i} text={cat}  filter={filter} />;
          })}
        </div>
        <div className="bg-white rounded-lg px-6 py-6 ">
          <p className="text-black font-bold font-mono mb-4">RoadMap</p>
          <div className="space-y-3">
            <p className="text-sm">Planned</p>
            <p className="text-sm">In Progress</p>
            <p className="text-sm">Live</p>
          </div>
        </div>
      </div>
      <div className="col-start-3 col-span-3 space-y-5">
        <div className="">
          <div className="flex flex-col justify-between block bg-gray-800 items-center h-16 border-solid rounded-lg md:flex-row px-4">
            <div className="block md:flex-row">
              <LightBulbIcon className="w-10 h-5 text-white inline-block " />
              <p className="font-serif text-white inline-block ">
                0 Suggestions
              </p>
            </div>
            <Link
              to="/create"
              className="py-2 px-4 bg-pink-100 text-white focus:outline-none hover:opacity-50 rounded-lg "
            >
              + Add Feedback
            </Link>
          </div>
        </div>

        <div className=" rounded-lg ">
          <div className="">
            {error ? <p className="px-4 py-2 bg-red-400 text-white text-center font-semibold mt-8">error</p>:''}
            {
              !error && <Feedback_list productRequests={filtredFeedback} />
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
