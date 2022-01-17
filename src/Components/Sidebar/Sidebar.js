import React from "react";
import MessageAction from "../Message/MessageAction"
import MessagesList from "../Message/MessagesList";
import SidebarHeader from "./SidebarHeader";

function Sidebar() {
  return (
    <div className="px-8 py-6 flex flex-col gap-y-4">
      <div className="w-[340px] h-full">
        <div className="w-full h-28 flex flex-col justify-between gap-y-2">
          <SidebarHeader />
          <MessageAction />
          <MessagesList />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
