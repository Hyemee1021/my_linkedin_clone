import React, { useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcons from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalenderViewDayIcon from "@mui/icons-material/CalendarViewDay";
import InputOption from "./Components/InputOption";

import addNewDoc from "./hooks/useAddDoc";
import { useSelector } from "react-redux";
import { selectUser } from "./slices/userSlice";
import useAddDoc from "./hooks/useAddDoc.js";
import { Post } from "./Post";

export const Feed = () => {
  const user = useSelector(selectUser);
  const { input, addNewDoc, setInput } = useAddDoc();
  console.log(input);
  return (
    <div className="bg-white rounded-sm">
      <div className="py-1 px-8  gap-3 flex shadow-sm pt-2">
        <CreateIcon />
        <form className="flex items-center w-full " onSubmit={addNewDoc}>
          <input
            type="text"
            value={input}
            className=" w-full    "
            placeholder="What's on your mind?"
            onChange={(e) => setInput(e.target.value)}
          />

          <button type="submit" className="hidden">
            Submit
          </button>
        </form>
      </div>
      <div className="flex flex-row justify-center gap-8 md:gap-16 mt-5 pb-3">
        <InputOption Icon={ImageIcon} title="photo" />
        <InputOption Icon={SubscriptionsIcons} title="Video" />
        <InputOption Icon={EventNoteIcon} title="Event" />
        <InputOption Icon={CalenderViewDayIcon} title="Write article" />
      </div>
    </div>
  );
};
