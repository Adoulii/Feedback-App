import React from "react";
import { useState } from "react";
import Modal from "./Modal";
import profileImage from "../assets/user-images/image-anne.jpg";
function Comment({ val }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="">
      <div className="comment px-6 flex flex-row justify-between ">
        <div className="flex space-x-2">
          <img src={profileImage} className="rounded-full w-10 h-10"></img>
          <div className="">
            <h2 className="font-Jost font-extrabold text-gray-800 ">
              {val.user.name}
            </h2>
            <a className="font-Jost text-xs hover:underline cursor-pointer text-gray-800 ">
              @{val.user.username}
            </a>
          </div>
        </div>
        <div>
          <button
            onClick={() => setShowModal(!showModal)}
            className="text-blue-700 font-extrabold hover:underline"
          >
            Reply
          </button>
        </div>
      </div>
      <div className="content px-6 py-2">
        <span className="leading-snug text-gray-800">{val.content}</span>
      </div>
      <div className="reply px-6 py-2 ">
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </div>
      {val.replies
        ? val.replies.map((reply) => <p className="reply">{}</p>)
        : ""}
      <div className="rounded-b-5"></div>
    </div>
  );
}

export default Comment;
