import { coursesArr } from "@/constants/courses.demo";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(coursesArr);
}
