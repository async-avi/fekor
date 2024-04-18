import axios from "axios";
import { Course } from "@/constants/interfaces";
import Link from "next/link";

async function fetchData() {
  const res = await axios.get(`http://localhost:3000/v0/api/course`);
  return res.data;
}
export default async function page() {
  const data: Course[] = await fetchData();

  return (
    <>
      {data.map((course: Course) => {
        return (
          <Link href={`courses/${course.id}`} key={course.id}>
            <div className="m-4 p-3 shadow-md rounded-xl">
              <h1 className="text-2xl font-bold">{course.title}</h1>
              <h2 className="font-semibold pt-1.5">{course.description}</h2>
              <p>{course.publisherId}</p>
            </div>
          </Link>
        );
      })}
    </>
  );
}
