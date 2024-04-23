import { coursesArr } from "@/constants/courses.demo";
import { NextResponse } from "next/server";

export async function GET() {
  let customArr = [];

  const sponserdCourses = coursesArr.filter(
    (course) => course.isSponsored === true
  );

  for (let i = 0; i < 3; i++) {
    customArr.push(sponserdCourses[i]);
  }

  return NextResponse.json(customArr);
}
