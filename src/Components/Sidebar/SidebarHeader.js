import React from "react";
import { BsSearch } from "react-icons/bs";
import { BsPencil } from "react-icons/bs";
function  SidebarHeader () {
  return (
    <div className="w-[340px] h-full">
      <div className="w-full h-28 flex flex-col justify-between gap-y-5">
        <div className="flex items-center gap-x-5">
          <img
            src="https://wpkixx.com/html/talkshak/dist/img/avatars/avatar-male-1.jpg"
            className=" cursor-pointer h-12 w-12 rounded-full border p-[1px] border-b-blue-500"
            alt="avatar"
          />
          <img
            src="https://wpkixx.com/html/talkshak/dist/img/logo.png"
            className="h-8"
            alt="logo"
          />
        </div>
        <div className="relative w-full h-full flex items-center">
          <input
            type="text"
            placeholder="Search for conversations.."
            className="focus:shadow-xl transition-all h-10 w-full border border-gray-300 outline-none rounded-md px-10"
          />
          <BsSearch className="absolute text-md text-blue-400 left-2 top-3" />
          <BsPencil className="absolute text-md text-gray-400 right-2 top-3" />
        </div>
      </div>
    </div>
  );
};

export default SidebarHeader;
