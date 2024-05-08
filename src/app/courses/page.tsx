import axios from "axios";
import { Course } from "@/constants/interfaces";
import CourseCard from "@/components/CourseCard";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

async function fetchData() {
  const res = await axios.get(`http://localhost:3000/v0/api/course`);
  const result = await res.data;
  return result;
}
export default async function page() {
  const data: Course[] = await fetchData();
  console.log(data.length);

  return (
    <div className="h-dvh md:h-screen w-screen fixed flex flex-col">
      <nav>
        <NavBar />
      </nav>
      <div className="overflow-y-scroll flex flex-col gap-4 mt-2">
        {data.map((d) => {
          return <CourseCard {...d} key={d.id} />;
        })}
      </div>
      <footer id="bottom">
        <Footer />
      </footer>
    </div>
  );
}
