import Link from "next/link";
import React from "react";
import { MdSearch } from "react-icons/md";

function NavBar() {
  return (
    <div className="w-screen h-full flex justify-center px-5 py-2 border border-gray-500 rounded-b-lg">
      <div className="flex justify-between w-full">
        {/* //todo: add image */}
        <div>image</div>

        <Link href={"/"}>
          <div className="font-bold text-3xl">fekor</div>
        </Link>
        <div className="text-2xl self-center">
          <MdSearch />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
