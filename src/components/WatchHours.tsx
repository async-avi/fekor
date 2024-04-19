import React from "react";

interface Props {
  watchHours: number;
  actualWatchHours: number;
}
function WatchHours(props: Props) {
  return (
    <>
      <div className="h-44 w-44 rounded-xl bg-gray-800 flex flex-col px-4 py-2 text-white">
        <h1 className=" text-xl font-bold underline">Watch Hours</h1>
        <h2 className=" text-xl font-bold">{props.watchHours} hours</h2>
        <div className="my-6">
          <div className="flex">
            <h1 className="font-semibold text-lg">Actual </h1>
            <h1 className="text-sm text-gold self-center border border-gold rounded-2xl px-2 mx-2">
              verified
            </h1>
          </div>
          <h2 className="font-bold text-xl">{props.actualWatchHours} hours</h2>
        </div>
      </div>
    </>
  );
}

export default WatchHours;
