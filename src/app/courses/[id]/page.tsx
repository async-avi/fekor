import React from "react";
import axios from "axios";
import SingleCourse from "@/components/SingleCourse";
async function getSpecificData(id: number) {
  const resp = await axios.get(`http://localhost:3000/v0/api/course/${id}`);

  return resp.data;
}

async function page({ params: { id } }: { params: { id: number } }) {
  const data = await getSpecificData(id);
  return (
    <>
      <SingleCourse course={data} />
    </>
  );
}

export default page;
