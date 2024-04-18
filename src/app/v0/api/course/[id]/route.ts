import { NextRequest, NextResponse } from "next/server";
import { coursesArr } from "@/constants/courses.demo";

export function GET(
  req: NextRequest,
  { params: { id } }: { params: { id: number } }
) {
  const concernedCourse = coursesArr.find((course) => {
    return course.id == id;
  });

  return NextResponse.json(concernedCourse);
}
