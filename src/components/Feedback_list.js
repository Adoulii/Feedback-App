import { useState, useEffect } from "react";
import calcComments from "../utils/calcComments";

import Feedback from "./Feedback";
function Feedback_list({productRequests}) {
  
  return (
    <div>

      {productRequests.map((request, i) => {
        return (
         <div className="rounded-lg bg-white mb-3 h-auto ">
         <Feedback
            key={i}
            upvotes={request.upvotes}
            text={request.title}
            parag={request.description}
            butt={request.ux}
            id = {request.id}
            comments={request.comments ? calcComments(request.comments) : 0}
          />
         </div>
         
          
        ) 
      })}
    </div>
  );
}

export default Feedback_list;
