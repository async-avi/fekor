"use client";

import HomePage from "@/pages/HomePage";
import React from "react";
import { RecoilRoot } from "recoil";

function page() {
  return (
    <div>
      <RecoilRoot>
        <HomePage />
      </RecoilRoot>
    </div>
  );
}

export default page;
