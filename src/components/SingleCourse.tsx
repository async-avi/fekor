import { Course } from "@/constants/interfaces";
import React from "react";
import Voting from "./Voting";

function SingleCourse({ course }: { course: Course }) {
  const {
    id,
    title,
    description,
    imageUrl,
    watchHours,
    actualWatchHours,
    totalReviews,
    category,
    upVotes,
    downVotes,
    url,
    clicksReceived,
    isSponsored,
    publisherId,
  } = course;

  const upvotePercentage = Math.floor((upVotes / (upVotes + downVotes)) * 100);
  return (
    <div className="h-screen w-screen p-5" key={id}>
      <h1 className="text-2xl font-bold">{title}</h1>
      <img
        src={imageUrl}
        alt={`${title} image`}
        className="w-[100%] rounded-lg"
      />
      <Voting upVotes={upVotes} downVotes={downVotes} />
    </div>
  );
}

export default SingleCourse;
