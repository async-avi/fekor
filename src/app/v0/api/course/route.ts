import prisma from "@/db";
import { NextResponse } from "next/server";

export async function GET() {
  const arrayToBeSent = [];
  const allSponseredCourses = await prisma.course.findMany({
    where: {
      isSponserd: true,
    },
    orderBy: {
      upVotes: "desc",
    },
  });

  const allNormalHighRatedCourses = await prisma.course.findMany({
    where: {
      isSponserd: false,
    },
    orderBy: {
      upVotes: "desc",
    },
    include: {
      ReviewsGiven: true,
    },
  });
  for (let i = 0; i <= 1; i++) {
    arrayToBeSent.push(allSponseredCourses[i]);
  }

  for (let i = 0; i <= 1; i++) {
    arrayToBeSent.push(allNormalHighRatedCourses[i]);
  }
  console.log(allSponseredCourses);

  return NextResponse.json(arrayToBeSent);
}
