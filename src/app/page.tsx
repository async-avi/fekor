import React from "react";
import Link from "next/link";

function page() {
  return (
    <div className="h-dvh w-screen">
      <h1>Hello world</h1>
      <Link href={"/courses"} className="underline text-red-900 text-5xl">
        Courses
      </Link>
    </div>
  );
}

export default page;
