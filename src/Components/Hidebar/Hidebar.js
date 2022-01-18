import React from "react";
import { HidebarIcon } from "./HidebarIcon";
import { GoSettings } from "react-icons/go";
import { AiOutlineHome, AiOutlinePoweroff } from "react-icons/ai";
import { BsChatLeftText } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdLightMode } from "react-icons/md";
import { useSelector } from "react-redux";
const items = [
  {
    icon: <GoSettings className='text-xl'/>,
    title: "Settings",
  },
  {
    icon: <AiOutlineHome className='text-xl'/>,
    title: "All Friends",
  },
  {
    icon: <BsChatLeftText className='text-xl'/>,
    title: "Recent Chat",
  },
  {
    icon: <IoMdNotificationsOutline className='text-xl'/>,
    title: "Notification",
  },
  {
    icon: <MdLightMode className='text-xl'/>,
    title: "Night Mode",
  },
  {
    icon: <AiOutlinePoweroff className='text-xl'/>,
    title: "Log Out",
  },
];

export const Hidebar = () => {
  const state = useSelector((state) => state.setting.showHidebar);
  return (
    <div className={"flex h-screen w-24 bg-[#F4F8FF] justify-start pt-8 transition-all " + (state === true ? 'ml-0' : '-ml-24')}>
      <div className="flex flex-col h-[600px]">
        {items.map((item, i) => {
          return <HidebarIcon key={i} title={item.title} icon={item.icon} />;
        })}
      </div>
    </div>
  );
};
