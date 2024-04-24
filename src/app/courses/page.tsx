import axios from "axios";
import { Course } from "@/constants/interfaces";
import CourseCard from "@/components/CourseCard";

async function fetchData() {
  const res = await fetch(`http://localhost:3000/v0/api/course`, {
    cache: "force-cache",
  });
  const result = await res.json();
  return result;
}
export default async function page() {
  const data: Course[] = await fetchData();
  console.log(data.length);

  return (
    <>
      <div className="px-2">
        {data.map((course) => {
          return (
            <CourseCard
              key={course.id}
              category={course.category}
              description={course.description}
              id={course.id}
              isSponsered={course.isSponsored}
              publisherId={course.publisherId}
              title={course.title}
            />
          );
        })}
      </div>
    </>
  );
}
