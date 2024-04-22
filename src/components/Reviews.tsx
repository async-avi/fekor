import React from "react";

interface Props {
  author: string;
  description: string;
  profilePic: string;
  username: string;
  likes: number;
  createdAt: string;
}
function Reviews({
  author,
  description,
  profilePic,
  username,
  likes,
  createdAt,
}: Props) {
  const date = new Date(createdAt);
  const displayDate = `${date.toLocaleString("en-IN", {
    month: "short",
  })} ${date.getDate()}`;

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
    </div>
  );
}

export default Reviews;
