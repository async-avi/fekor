"use client";

import Link from "next/link";
import React, { useState } from "react";
import { CiSettings } from "react-icons/ci";

function NavBar() {
  const [setting, setSetting] = useState(false);
  return (
    <div className="w-screen h-full flex justify-center px-5 pt-3 pb-1 border-b-4 border-gray-400 rounded-b-md">
      <div className="flex justify-between w-full">
        {/* //todo: add image */}
        <div className="self-center">image</div>

        <Link href={"/"}>
          <div className="font-bold text-3xl">fekor</div>
        </Link>
        <div className="text-3xl self-center">
          <button onClick={() => setSetting(!setting)}>
            <CiSettings />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
