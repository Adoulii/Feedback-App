import React from "react";
import { useState, useEffect } from "react";
import Input from "./ui/Input";
import Label from "./ui/Label";
import axios from "axios";
import FromButton from "./ui/FormButton";
import { Link } from "react-router-dom";
function SignUpPage() {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [eror, setError] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmpassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(setError(""), 2000);
      setError("Please Confirm your Passwords!");
      return;
    }
    const registred = {
      fullname: fullname,
      username: username,
      email: email,
      password: password,
      confirmpassword: confirmpassword,
    };
    axios
      .post("http://localhost:4000/app/signup", registred)
      .then((response) => console.log(response.data));
  };
  return (
    <div className="grid grid-cols-7 py-20 ">
      <form
        className="col-start-3 col-span-3 bg-white rounded-lg"
        onSubmit={onSubmit}
      >
        <h3 className="font-bold text-gray-700  text-xl text-center mb-10">
          Sign Up
        </h3>
        <Label title="Fullname" />
        <Input
          onChange={(e) => setFullname(e.target.value)}
          type="text"
          value={fullname}
        />
        <Label title="Username" />
        <Input
          className="w-auto"
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          value={username}
        />
        <Label title="Email" />
        <Input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          value={email}
        />
        <Label title="Password" />
        <Input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          value={password}
        />
        <Label title="Confirm password" />
        <Input
          className=""
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          value={confirmpassword}
        />
        <div>
          <button
            type="submit"
            className="px-4 py-3 bg-pink-100 justify-end text-white focus:outline-none hover:opacity-50 rounded-lg transition duration-300"
          >
            Signup
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUpPage;
