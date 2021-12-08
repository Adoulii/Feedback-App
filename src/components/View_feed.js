import React, { useEffect, useState } from "react";
import Feedback from "./Feedback";
import { productRequests } from "../data.json";
import calcComments from "../utils/calcComments";
import Viewcom from "./Viewcom";
import ButtonLink from "./ui/ButtonLink";
import { motion } from "framer-motion";
import TextArea from "./ui/TextArea";
import ButtonSubmit from "./ui/ButtonSubmit";

function View_feed({ location, match, history }) {
  const [view, setView] = useState(null);
  const [comments, setComments] = useState(null);
  const [value, setValue] = useState("");
  useEffect(() => {
    if (+match.params.id <= productRequests.length) {
      const feed = productRequests[+match.params.id - 1];
      setView(feed);
      setComments(feed.comments);
    }
  }, []);

  function submitComment(_) {
    if (value.trim()) {
      const comment = {
        user: { name: "adouli", username: "adouli64" },
        content: value,
      };
      setComments((prev) => prev.concat(comment));
      setValue("");
      /* productRequests[+match.params.id -1].comments.push(comment)  */
    }
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="grid grid-cols-7 py-16 space-y-4 h-full">
        <div className="col-start-3 col-span-3">
          <ButtonLink />
        </div>
        <div className="col-start-3 col-span-3 bg-white rounded-lg mb-3 ">
          {view ? (
            <Feedback
              upvotes={view.upvotes}
              text={view.title}
              parag={view.description}
              butt={view.ux}
              id={view.id}
              comments={view.comments ? calcComments(view.comments) : 0}
            />
          ) : null}
        </div>
        <div className="col-start-3 col-span-3 bg-white rounded-lg ">
          {view ? (
            <Viewcom comments={comments} setComments={setComments} />
          ) : (
            ""
          )}
        </div>
        <div className="col-start-3 col-span-3 bg-white rounded-lg h-auto  ">
          <div className="py-4 ">
            <span className="font-Poppins font-extrabold px-6 text-gray-800 text-lg ">
              Add Comment
            </span>
          </div>
          <div className=" px-6 space-y-2    ">
            <TextArea
              placeholder="Can't wait for dark mode"
              value={value}
              setValue={setValue}
            />
            <ButtonSubmit text="Post Comment" onClick={submitComment} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default View_feed;
