import axios from "axios";
import { Course } from "@/constants/interfaces";
import CourseCard from "@/components/CourseCard";

async function fetchData() {
  const res = await axios.get(`http://localhost:3000/v0/api/course`);
  const result = await res.data;
  return result;
}
export default async function page() {
  const data: Course[] = await fetchData();
  console.log(data.length);

  return (
    <>
      <div className="md:grid grid-cols-5 md:px-20">
        <div className="hidden md:flex border border-black px-2 py-1">
          {/* {" // todo: sidebar"} */}
          hi
        </div>
        <div className="col-span-3 px-2 py-3 flex flex-col gap-5">
          {data.map((c) => {
            //just for trial
            // todo: isSponsered through category
            return <CourseCard {...c} key={c.id} />;
          })}
        </div>
        <div className="border border-black px-2 py-1 hidden md:flex sticky">
          hi
        </div>
      </div>
    </>
  );
}
