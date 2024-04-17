import {
  allCourseAtom,
  selectedCourse,
  selectedCourseId,
} from "@/store/atoms/atom";
import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Course } from "@/constants/interfaces";
import Link from "next/link";

function HomePage() {
  const courseArr = useRecoilValue(allCourseAtom);

  useEffect(() => {
    alert(typeof Array.from(courseArr));
  });
  return (
    <div>
      {courseArr.map((course: Course) => {
        return (
          <Link href={`courses/${course.id}`}>
            <div className="m-4 p-3 shadow-md rounded-xl">
              <h1 className="text-2xl font-bold">{course.title}</h1>
              <h2 className="font-semibold pt-1.5">{course.description}</h2>
              <p>{course.publisherId}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default HomePage;
