import React from "react";

interface Props {
  totalReviews: number;
}

function ReactionReview({ totalReviews }: Props) {
  return (
    <div className="w-44 h-44 bg-gray-800 rounded-lg flex flex-col px-3">
      <div className="h-1/2 w-full justify-center items-center flex">
        <h1 className="text-4xl">&#128175;</h1>
      </div>
      <div className="text-white">
        <h1 className="text-base font-semibold">Reviews</h1>
        <h2 className="font-bold text-xl">
          {totalReviews < 1000 ? totalReviews.toString() : "1k+"}
        </h2>
      </div>
    </div>
  );
}

export default ReactionReview;
