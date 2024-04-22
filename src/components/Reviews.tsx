import { ThickArrowDownIcon, ThickArrowUpIcon } from "@radix-ui/react-icons";
import React from "react";

interface Props {
  author: string;
  description: string;
  profilePic: string;
  username: string;
  likeCount: number;
  createdAt: string;
}
function Reviews({
  author,
  description,
  profilePic,
  username,
  likeCount,
  createdAt,
}: Props) {
  const date = new Date(createdAt);
  const displayDate = `${date.toLocaleString("en-IN", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  })}`;

  return (
    <div className="py-4 px-1 shadow-lg rounded-lg">
      <div className="w-full flex gap-2">
        <img src={profilePic} className=" rounded-full w-12 h-12" />
        <div className="flex flex-col">
          <h1 className="text-base font-semibold">{author}</h1>
          <h1 className="text-gray-700 text-sm">@{username}</h1>
        </div>
      </div>
      <h2>{description}</h2>
      <h2 className="text-sm font-semibold py-1">{displayDate}</h2>
      <div className="flex justify-end">
        <div className="flex border-gray-900 border rounded-xl">
          <div className="flex px-2">
            <ThickArrowUpIcon className="self-center" />
            <h1 className="font-semibold">{likeCount}</h1>
          </div>
          <div className="flex px-2 border-l-2 border-black">
            <ThickArrowDownIcon className="self-center" />
            <h1 className="font-semibold">9</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
