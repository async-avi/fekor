import prisma from "@/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { username, description, imageUrl } = body;
  await prisma.user.create({
    data: {
      username,
      description,
      imageUrl,
    },
  });

  return NextResponse.json({
    msg: "success",
  });
}
