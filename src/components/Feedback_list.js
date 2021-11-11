import { useState, useEffect } from "react";

import Feedback from "./Feedback";
function Feedback_list({productRequests}) {
  

   function calcComments(comments){

       
       const sum =  comments.reduce((acc, val)=>{
          return val.replies ?  acc+ val.replies.length : acc ;   

        },0)
        return sum + comments.length
   }

  return (
    <div>

      {productRequests.map((request, i) => {
        return (
          <Feedback
            key={i}
            upvotes={request.upvotes}
            Text={request.title}
            Parag={request.description}
            butt={request.ux}
            Comments={request.comments ? calcComments(request.comments) : 0}
          />
        ) 
      })}
    </div>
  );
}

export default Feedback_list;
