import React from "react";

interface Params {
  upVotes: number;
  downVotes: number;
}
function Voting(params: Params) {
  const { upVotes, downVotes } = params;
  const upVotesPercentage = Math.round((upVotes / (upVotes + downVotes)) * 100);

  const downVotesPercentage = 100 - upVotesPercentage;

  return (
    <div className="w-full h-14 flex">
      {upVotes < 15 ? (
        <div className="max-w-fit px-1 bg-blue-200 border-[6px] border-blue-800 rounded-l-3xl flex justify-center items-center border-r-2">
          <h1 className="text-blue-800 font-bold">{upVotesPercentage}%</h1>
        </div>
      ) : (
        <div
          className="bg-blue-200 h-full flex justify-center items-center rounded-l-3xl border-[6px] border-blue-800 border-r-2"
          style={{ width: `${upVotesPercentage}%` }}
        >
          <h1 className="text-blue-800 font-bold">{upVotesPercentage}%</h1>
        </div>
      )}
      {downVotes < 15 ? (
        <div className="max-w-fit px-1 bg-red-200 border-[6px] border-red-800 rounded-r-3xl flex justify-center items-center border-l-4">
          <h1 className="text-red-800 font-bold">{downVotesPercentage}%</h1>
        </div>
      ) : (
        <div
          className="bg-red-200 h-full flex justify-center items-center rounded-r-3xl border-[6px] border-red-800 border-l-4"
          style={{ width: `${downVotesPercentage}%` }}
        >
          <h1 className="text-red-800 font-bold">{downVotesPercentage}%</h1>
        </div>
      )}
    </div>
  );
}

export default Voting;
