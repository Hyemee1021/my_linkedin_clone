import React, { useState } from "react";
import logo from "../assets/linkedinLogo.png";

import { auth } from "../firebase"; // Import the auth object from firebase.js
import { createUserWithEmailAndPassword } from "firebase/auth";

export const LogIn = () => {
  const [name, setName] = useState("");
  console.log(name);
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault(); // Prevent the default form submission

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // ...
        alert("Account is created successfully.");
        setEmail("");
        setName("");
        setPassword("");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`Error: ${errorMessage}`);
        // ..
      });
  };
  return (
    <div className="flex flex-col justify-center items-center  min-h-screen ">
      <div className="w-full max-w-sm">
        <h1 className="mb-5">
          <img src={logo} alt="Logo" className="w-56 h-auto mx-auto" />
        </h1>
        <form className="flex flex-col gap-4">
          <input
            value={name}
            type="text"
            placeholder="Full Name"
            className="bg-white cursor-pointer p-2 rounded-md  border-gray-300"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-white  cursor-pointer p-2 rounded-md  border-gray-300"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-white p-2 rounded-md  border-gray-300"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
          <button className="w-full max-w-sm bg-blue-300 rounded-md p-2">
            Log In
          </button>
        </form>
        <p className="text-center mt-3">
          Not a member?{" "}
          <button
            className="hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={handleRegister}
          >
            Register Now
          </button>
        </p>
      </div>
    </div>
  );
};
