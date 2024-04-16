import prisma from "@/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await prisma.publisher.create({
    data: {
      username: "user123",
      authenticName: "John Doe",
    },
  });
  return NextResponse.json({
    msg: "done",
  });
}
