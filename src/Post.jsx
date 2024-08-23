import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import InputOption from "./Components/InputOption";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";
import usePost from "./hooks/usePost";

export const Post = () => {
  const { posts, loading, error } = usePost();
  return (
    <div className="mt-5 bg-white">
      <div className="p-3">
        {loading && <p>Loading posts...</p>}
        {error && <p>Error: {error}</p>}

        <div className="flex flex-col gap-3">
          {posts.map((post) => (
            <div key={post.id} className="border p-4 rounded-md shadow-sm ">
              <Avatar />
              <h2 className="text-lg font-bold">{post.name}</h2>
              <p className="text-sm text-gray-600">{post.description}</p>
              <p className="mt-2">{post.message}</p>
              {post.photoUrl && (
                <img
                  src={post.photoUrl}
                  alt="Post"
                  className="mt-2 w-full h-auto rounded-md"
                />
              )}
              <div className="post_options mt-3 flex  justify-center  gap-8 md:gap-16 ">
                <InputOption title="Like" Icon={ThumbUpIcon} />
                <InputOption title="Commnet" Icon={CommentIcon} />
                <InputOption title="Share" Icon={ShareIcon} />
                <InputOption title="Send" Icon={SendIcon} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
