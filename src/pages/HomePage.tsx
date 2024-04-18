import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Course } from "@/constants/interfaces";
import Link from "next/link";
import axios from "axios";

async function HomePage() {
  const resp = await axios.post(`v0/api/course`);
  const coursesArray = resp.data;
  return <div></div>;
}

export default HomePage;
