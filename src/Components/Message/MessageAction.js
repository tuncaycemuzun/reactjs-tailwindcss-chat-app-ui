import React, { useState ,useRef} from "react";
import { BsPlus } from "react-icons/bs";
import useOnClickOutside from "../../Hooks/useOnClickOutside";
function MessageAction() {
  const [isActiveCategory, setActiveCategory] = useState(1);
  const [isActiveAdd, setisActiveAdd] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref,()=>{
    setisActiveAdd(false);
  });

  const messageCategori = [
    {
      id: 1,
      type: "all",
      text: "All",
    },
    {
      id: 2,
      type: "favourit",
      text: "Favourit",
    },
    {
      id: 3,
      type: "unread",
      text: "Unread",
    },
  ];
  return (
    <div className="flex w-[340px] flex-col justify-between items-center">
      <div className="w-full flex gap-x-4 mt-2">
        {messageCategori.map((item, i) => {
          return (
            <input
              type="button"
              key={item.id}
              onClick={() => setActiveCategory(item.id)}
              className={`text-sm text-center px-4 py-2 cursor-pointer transition-all ${
                item.id === isActiveCategory
                  ? "text-white bg-sky-500 rounded-lg"
                  : "text-gray-500"
              }`}
              value={item.text}
            />
          );
        })}
      </div>
      <div className="w-full flex justify-end">
        <div
          onClick={() => setisActiveAdd(!isActiveAdd)}
          className="w-16 text-sm shadow-xl border text-gray-500 font-light border-gray-200 cursor-pointer p-2 rounded-lg flex items-center justify-between h-9 relative"
        >
          <span>Add</span>
          <BsPlus />
          {isActiveAdd ? (
            <div ref={ref} className="absolute top-10 left-6 z-20 bg-white w-48 h-auto rounded-lg shadow-2xl">
              <ul className="px-2 py-2">
                <li className="flex items-center justify-between h-10 hover:bg-[#E9EFF5] px-2 py-1 rounded-md transition-all">
                  New User
                </li>
                <li className="flex items-center justify-between h-10 hover:bg-[#E9EFF5] px-2 py-1 rounded-md transition-all">
                  New Group <BsPlus className="text-xl" />
                </li>
                <li className="flex items-center justify-between h-10 hover:bg-[#E9EFF5] px-2 py-1 rounded-md transition-all">
                  Private Chat <BsPlus className="text-xl" />
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default MessageAction;
