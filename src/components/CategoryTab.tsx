import React from "react";

interface Props {
  category: string;
  bgColor?: string;
}

function CategoryTab({ category }: Props) {
  return (
    <div className="flex">
      {category == "Sponsored" ? (
        <h1 className="font-semibold text-yellow-600 border border-yellow-600 px-2 rounded-2xl text-sm my-1 py-1">
          {category}
        </h1>
      ) : category == "Hot" ? (
        <h1 className="self-center border border-black px-3 rounded-2xl py-1 font-semibold text-white bg-gray-800 text-sm">
          &#128293; Hot
        </h1>
      ) : null}
    </div>
  );
}

export default CategoryTab;
