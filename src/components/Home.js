import React, { useState } from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { LightBulbIcon } from "@heroicons/react/solid";
import Feedback_list from "./Feedback_list";
import { productRequests } from "../data.json";
import "../divstyle.css";
import EmptyFeed from "./EmptyFeed";
import { motion } from "framer-motion";
import DropDownNav from "./ui/DropDownNav";

function Home() {
  const [sort, setSort] = useState("-voteScore");
  const [filtredFeedback, setFiltredFeedback] = useState(
    productRequests.slice(0, 6)
  );
  const [error, setError] = useState("");

  const filter = (text) => {
    setError("");
    if (text === "All") {
      setFiltredFeedback(productRequests.slice(0, 6));
    } else {
      const filtredfeeds = productRequests
        .filter((item) => item.ux.toLowerCase() === text.toLowerCase())
        .slice(0, 6);

      if (!filtredfeeds.length) {
        setError("No data found");
      }
      setFiltredFeedback(filtredfeeds);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="grid grid-cols-6 gap-2 py-20">
        <div className=" col-start-2 space-y-5 ">
          <div className="intro h-32 bg-gray-800 rounded-lg py-6 px-6 ">
            <p className="text-white font-bold text-left font-Jost">
              Front end Mentor
            </p>
            <p className="text-white text-left opacity-70 font-Jost">
              Feedback Board
            </p>
          </div>

          <div className="flex flex-wrap bg-white rounded-lg px-5 py-6 space-x-1 space-y-2">
            {["All", "Enhancement", "UX", "UI", "Bug", "Feature"].map(
              (cat, i) => {
                return <Button key={i} text={cat} filter={filter} />;
              }
            )}
          </div>
          <div className="bg-white rounded-lg px-6 py-6 ">
            <p className="text-black font-bold mb-4 font-Jost">RoadMap</p>
            <div className="space-y-3">
              <p className="text-sm font-Jost">Planned</p>
              <p className="text-sm font-Jost">In Progress</p>
              <p className="text-sm font-Jost">Live</p>
            </div>
          </div>
        </div>
        <div className="col-start-3 col-span-3 space-y-5">
          <div className="flex justify-between bg-gray-800 items-center h-16 border-solid rounded-lg md:flex-row px-4">
            <div className="md:flex items-center space-x-2">
              <div className="md:flex flex row">
                <div>
                  {/* <LightBulbIcon className="w-10 h-5 text-white inline-block " /> */}
                </div>
                <div>
                  <p className="font-Jost text-white inline-block ">
                    0 Suggestions
                  </p>
                </div>
              </div>

              <div>
                <DropDownNav
                  onChange={setSort}
                  value={sort}
                  options={[
                    "-voteScore",
                    "voteScore",
                    "-commentsCount",
                    "commentsCount",
                  ]}
                />
              </div>
            </div>
            <div>
              <Link
                to="/create"
                className="py-2 px-4 font-bold bg-pink-100 text-white focus:outline-none hover:opacity-70 rounded-lg transition duration-300  font-Jost"
              >
                + Add Feedback
              </Link>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className=" rounded-lg ">
              <div className="">
                {error ? <EmptyFeed /> : ""}
                {!error && <Feedback_list productRequests={filtredFeedback} />}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
