import React from "react";
import Link from "next/link";
import CategoryTab from "./CategoryTab";
import getAvatar from "@/app/actions";

interface Props {
  id: number;
  title: string;
  description: string;
  isSponsored: boolean;
  category: string[];
  publisherId: string;
}

async function CourseCard({
  id,
  title,
  description,
  isSponsored,
  category,
  publisherId,
}: Props) {
  const isHot = category.find((c) => c == "hot");

  let hoverGold = "hover:border hover:border-gold";
  //   const avatar = await getAvatar(publisherId);

  return (
    <Link href={`courses/${id}`} key={id}>
      <div
        className={`shadow-md rounded-xl px-3 py-3 ${
          isSponsored ? hoverGold : null
        }`}
      >
        <h1 className="text-2xl font-bold">{title}</h1>
        <div className="flex gap-2">
          {isSponsored ? <CategoryTab category="Sponsored" /> : null}
          {isHot ? <CategoryTab category="Hot" bgColor="bg-gray-800" /> : null}
        </div>
        <h2 className="font-semibold pt-1.5">{description}</h2>
        <div className="flex gap-2 my-3">
          {/* <img
            src={avatar}
            alt={`${publisherId} pic`}
            className="rounded-full w-6 h-6"
          /> */}
          <h2 className="self-center font-semibold text-sm text-blue-700">
            {publisherId}
          </h2>
        </div>
      </div>
    </Link>
  );
}

export default CourseCard;
