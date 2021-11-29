import calcComments from "../utils/calcComments";
import { motion } from "framer-motion";
import Feedback from "./Feedback";
function Feedback_list({ productRequests }) {
  return (
    <motion.div>
      {productRequests.map((request, i) => {
        return (
          <div className="rounded-lg bg-white mb-2 h-auto  ">
            <Feedback
              key={i}
              upvotes={request.upvotes}
              text={request.title}
              parag={request.description}
              butt={request.ux}
              id={request.id}
              comments={request.comments ? calcComments(request.comments) : 0}
            />
          </div>
        );
      })}
    </motion.div>
  );
}

export default Feedback_list;
