import React from "react";
import { useDispatch } from "react-redux";
import { setActiveMessage } from "../../store/messageSlice";

const Message = ({
  id,
  imageSrc,
  isActiveUser,
  name,
  unreadMessage,
  messageDate,
  typing,
  index,
  activeMessage,
}) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(setActiveMessage(index))}
      className={
        (index === activeMessage ? "bg-sky-100 pl-5" : "") +
        " relative hover:shadow-xl transition-all cursor-pointer flex-shrink-0 flex items-center px-2 py-4 w-full h-20 gap-x-4 border-b border-b-gray-200"
      }
    >
      <div className="relative">
        <img
          alt=""
          className="w-14 h-12 border-2 border-white rounded-full"
          src={imageSrc}
        />
        <span
          className={
            " w-3 h-3 border border-white rounded-full absolute right-0 bottom-0 " +
            (isActiveUser === true ? "bg-green-500" : "bg-gray-500")
          }
        ></span>
      </div>
      <div className="flex flex-col justify-between w-full">
        <div className="flex justify-between w-full">
          <div className="flex items-center">
            <span className="font-medium text-sm">{name}</span>
            <span
              className={
                unreadMessage !== 0
                  ? "border border-white text-sm shadow-lg ml-2 w-7 h-7 flex items-center justify-center rounded-full text-white " +
                    (unreadMessage > 5 ? "bg-red-500" : "bg-orange-400")
                  : ""
              }
            >
              {unreadMessage !== 0 ? unreadMessage + "+" : ""}
            </span>
          </div>
          <div className="font-medium text-sm text-gray-400">{messageDate}</div>
        </div>
        <div className="font-medium text-sm text-gray-400">{typing === true ? "Typing..." : "Test mesaj içeriği"}</div>
      </div>
      {index === activeMessage ? (
        <span className="absolute left-0 top-0 h-full w-1 bg-sky-300"></span>
      ) : (
        ""
      )}
    </div>
  );
};

export default Message;
