import prisma from "@/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { title, description, imageUrl, url } = body;
  const newCourse = await prisma.course.create({
    data: {
      title,
      description,
      imageUrl,
      isSponserd: true,
      url,
      publisherId: "661e7a36991d129af2fcae6c",
    },
  });

  return NextResponse.json(newCourse);
}
