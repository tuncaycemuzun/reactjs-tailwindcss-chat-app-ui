import React from "react";
import MessageAction from "../Message/MessageAction"
import MessagesList from "../Message/MessagesList";
import SidebarHeader from "./SidebarHeader";

function Sidebar() {
  return (
      <div className="w-[400px] p-4 h-full">
        <div className="w-full h-28 items-center flex flex-col justify-between gap-y-2">
          <SidebarHeader />
          <MessageAction />
          <MessagesList />
        </div>
      </div>
  );
}

export default Sidebar;
