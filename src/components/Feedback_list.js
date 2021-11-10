import React from "react";
import { productRequests } from "../data.json";
import Feedback from "./Feedback";
function Feedback_list() {
  return (
    <div>
      {productRequests.map((request, counter) => {
        return counter + 1 < 6 ? (
          <Feedback
            upvotes={request.upvotes}
            Text={request.title}
            Parag={request.description}
            butt={request.category}
            Comments={Object.keys(productRequests).length}
          />
        ) : null;
      })}
    </div>
  );
}

export default Feedback_list;
