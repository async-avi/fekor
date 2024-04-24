import { Course } from "@/constants/interfaces";
import React from "react";
import Voting from "./Voting";
import WatchHours from "./WatchHours";
import ReactionReview from "./ReactionReview";
import Reviews from "./Reviews";

function SingleCourse({ course }: { course: Course }) {
  const {
    id,
    title,
    description,
    imageUrl,
    watchHours,
    actualWatchHours,
    category,
    upVotes,
    downVotes,
    url,
    isSponsored,
    publisherId,
    reviews,
  } = course;
  const isHot = category.find((c) => c == "hot");

  return (
    <div className="h-screen w-screen p-5" key={id}>
      <h1 className="text-2xl font-bold">{title}</h1>

      <div className="text-sm flex gap-2 my-2">
        {isSponsored ? (
          <h1 className="border border-yellow-600 text-yellow-600 font-semibold rounded-2xl px-3 py-1">
            Sponsored
          </h1>
        ) : null}
      </div>

      <img
        src={imageUrl}
        alt={`${title} image`}
        className="w-[100%] rounded-lg"
      />
      <div className="flex gap-2">
        <WatchHours
          watchHours={watchHours}
          actualWatchHours={actualWatchHours}
        />
        <ReactionReview totalReviews={reviews.length} />
      </div>
      <Voting upVotes={upVotes} downVotes={downVotes} />
      {reviews.length > 0 ? (
        <div>
          <h1 className="text-2xl font-semibold">Reviews: {reviews.length}</h1>
          {reviews.map((review) => {
            return <Reviews {...review} key={review.username} />;
          })}
        </div>
      ) : (
        <div className="flex flex-col h-56">
          <h1>Reviews: 0</h1>
          <div className="h-full flex justify-center items-center shadow-2xl">
            <h1 className="opacity-45 text-gray-900">
              Be the first one to add a review
            </h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleCourse;
