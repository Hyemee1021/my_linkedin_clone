import React, { useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcons from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalenderViewDayIcon from "@mui/icons-material/CalendarViewDay";
import InputOption from "./Components/InputOption";

import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";
import { useSelector } from "react-redux";
import { selectUser } from "./slices/userSlice";
import { Post } from "./Post";
export const Feed = () => {
  const [input, setInput] = useState("");

  const user = useSelector(selectUser);

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
  return (
    <div className="bg-white rounded-sm">
      <div className="py-1 px-8    flex shadow-sm">
        <CreateIcon />
        <form className="flex items-center w-full " onSubmit={addNewDoc}>
          <input
            type="text"
            value={input}
            className="px-3 w-full  rounded-sm"
            placeholder="What's on your mind?"
            onChange={(e) => setInput(e.target.value)}
          />

          <button type="submit" className="hidden">
            Submit
          </button>
        </form>
      </div>
      <div className="flex flex-row justify-center gap-8 md:gap-16 mt-5">
        <InputOption Icon={ImageIcon} title="photo" />
        <InputOption Icon={SubscriptionsIcons} title="Video" />
        <InputOption Icon={EventNoteIcon} title="Event" />
        <InputOption Icon={CalenderViewDayIcon} title="Write article" />
      </div>
    </div>
  );
};
