"use client";
import React from "react";
import { IoMdHome } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { RiNotification4Fill } from "react-icons/ri";
import { BiSolidError } from "react-icons/bi";
import Link from "next/link";

const styles = [];
function Footer() {
  return (
    <div className="flex w-full h-full px-6 py-4 justify-center bg-gray-900 text-white">
      <div className="w-full justify-between flex">
        <Link href={"/courses"}>
          <div className="text-2xl px-4 h-full py-2 rounded-lg w-max-w-fit">
            <IoMdHome />
          </div>
        </Link>
        <div className="text-2xl px-4  h-full py-2 rounded-lg w-max-w-fit">
          <FaSearch />
        </div>
        <div className="text-2xl px-4  h-full py-2 rounded-lg w-max-w-fit">
          <RiNotification4Fill />
        </div>
        <div className="text-2xl px-4  h-full py-2 rounded-lg w-max-w-fit">
          <BiSolidError />
        </div>
      </div>
    </div>
  );
}

export default Footer;
