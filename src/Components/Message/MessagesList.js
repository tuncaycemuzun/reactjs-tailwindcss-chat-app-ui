import React from "react";
import { useSelector } from "react-redux";
import Message from './Message';
function MessagesList() {
  const menuItems = useSelector((state) => state.message.messages);
  const activeMessage = useSelector(state => state.message.activeMessage);
  return (
    <div className="flex w-full  mt-10">
      <div className="flex w-full h-[430px] overflow-y-scroll flex-col">
        {menuItems.length > 0 &&
          menuItems.map((item,i) => {
            return <Message key={item.id} id={item.id} index={i} activeMessage={activeMessage} isActiveUser={item.isActiveUser} name={item.name} typing={item.typing} unreadMessage={item.unreadMessasgeCount} messageDate={item.messageDate} imageSrc={item.image}/>
          })}
      </div>
    </div>
  );
}

export default MessagesList;
