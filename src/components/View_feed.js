import React, { useEffect, useState } from "react";
import Feedback from "./Feedback";
import {productRequests} from "../data.json";
import calcComments from "../utils/calcComments";
import viewComments from "./viewComments";

function View_feed({ location, match, history }) {
  const [view, setView] = useState(null);
  useEffect(() => {
    const [feed] = productRequests.filter((val) => val.id === +match.params.id);
    setView(feed);
  }, []);

  return (
    <div className="grid grid-cols-7 grid-rows-6 py-20">
      <div className="col-start-3 col-span-3 bg-white rounded-lg">
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
      <viewComments />
      
    </div>
  );
}

export default View_feed;
