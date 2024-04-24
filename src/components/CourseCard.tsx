import React from "react";
import Link from "next/link";
import CategoryTab from "./CategoryTab";

interface Props {
  id: number;
  title: string;
  description: string;
  isSponsered: boolean;
  category: string[];
  publisherId: string;
}

function CourseCard({
  id,
  title,
  description,
  isSponsered,
  category,
  publisherId,
}: Props) {
  const isHot = category.find((c) => c == "hot");

  return (
    <Link href={`courses/${id}`} key={id}>
      <div className="m-4 p-2 shadow-md rounded-xl">
        <h1 className="text-2xl font-bold">{title}</h1>
        <div className="flex gap-2">
          {isSponsered ? <CategoryTab category="Sponsored" /> : null}
          {isHot ? <CategoryTab category="Hot" bgColor="bg-gray-800" /> : null}
        </div>
        <h2 className="font-semibold pt-1.5">{description}</h2>
        <p>{publisherId}</p>
      </div>
    </Link>
  );
}

export default CourseCard;
