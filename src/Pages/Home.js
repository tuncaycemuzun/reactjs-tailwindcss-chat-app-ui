import React from "react";
import { Hidebar } from "../Components/Hidebar/Hidebar";
import Sidebar from "../Components/Sidebar/Sidebar";
import { useSelector } from "react-redux";

export const Home = () => {
  const state = useSelector((state) => state.setting.showHidebar);
  return (
    <div className="h-screen bg-white flex">
      <Hidebar/>

      <Sidebar />
      <div className="flex flex-1 p-2">deneme</div>
    </div>
  );
};
