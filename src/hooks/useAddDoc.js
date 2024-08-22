import { collection, addDoc } from "firebase/firestore";

import { useState } from "react";
import { db } from "../firebase";
//state value-input
//method
//.return smth from hook
export default function useAddDoc() {
  const [input, setInput] = useState("");
  const addNewDoc = async (e) => {
    e.preventDefault();

    if (input.trim() === "") {
      alert("Input cannot be empty.");
      return;
    }

    try {
      // Add a new document with a generated id.
      await addDoc(collection(db, "posts"), {
        name: user.displayName || "Anonymous",
        description: user.email || "",
        message: input,
        photoUrl: user.photoUrl || "",
      });

      // Clear input after submission
      setInput("");
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Failed to add document. Please     try again.");
    }
  };
  return {
    addNewDoc,
    input,
    setInput,
  };
}
