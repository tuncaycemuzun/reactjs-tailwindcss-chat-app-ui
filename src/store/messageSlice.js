import { createSlice } from "@reduxjs/toolkit";

const messages = [
  {
    id: 1,
    image:
      "https://wpkixx.com/html/talkshak/dist/img/avatars/avatar-female-1.jpg",
    isActiveUser: true,
    name: "Sarah Dalton",
    messageDate: "Mon",
    unreadMessasgeCount: 5,
    typing: false,
    favourit: false,
  },
  {
    id: 2,
    image:
      "https://wpkixx.com/html/talkshak/dist/img/avatars/avatar-male-1.jpg",
    isActiveUser: false,
    name: "Bob Frank",
    messageDate: "Sun",
    unreadMessasgeCount: 9,
    typing: false,
    favourit: false,
  },
  {
    id: 3,
    image:
      "https://wpkixx.com/html/talkshak/dist/img/avatars/avatar-female-2.jpg",
    isActiveUser: true,
    name: "Lucy Grey",
    messageDate: "5 mins",
    unreadMessasgeCount: 0,
    typing: true,
    favourit: true,
  },
  {
    id: 4,
    image:
      "https://wpkixx.com/html/talkshak/dist/img/avatars/avatar-male-2.jpg",
    isActiveUser: false,
    name: "Linda Gates",
    messageDate: "Mon",
    unreadMessasgeCount: 0,
    typing: false,
    favourit: true,
  },
  {
    id: 5,
    image:
      "https://wpkixx.com/html/talkshak/dist/img/avatars/avatar-female-5.jpg",
    isActiveUser: true,
    name: "Karen Joye",
    messageDate: "Fri",
    unreadMessasgeCount: 0,
    typing: false,
    favourit: true,
  },
  {
    id: 6,
    image:
      "https://wpkixx.com/html/talkshak/dist/img/avatars/avatar-female-6.jpg",
    isActiveUser: false,
    name: "Lisa Honey",
    messageDate: "Feb 10",
    unreadMessasgeCount: 1,
    typing: false,
    favourit: false,
  },
  {
    id: 7,
    image:
      "https://wpkixx.com/html/talkshak/dist/img/avatars/avatar-male-3.jpg",
    isActiveUser: false,
    name: "Danial Cabral",
    messageDate: "Feb 10",
    unreadMessasgeCount: 1,
    typing: false,
    favourit: true,
  },
  {
    id: 8,
    image:
      "https://wpkixx.com/html/talkshak/dist/img/avatars/avatar-male-4.jpg",
    isActiveUser: true,
    name: "Jhon Doe",
    messageDate: "Thu",
    unreadMessasgeCount: 4,
    typing: false,
    favourit: true,
  },
];
const initialState = {
  messages: messages,
  activeMessage : 0,
};

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    messagesList: (state) => {
      state.messages = messages;
    },
    setActiveMessage: (state, action) => {
      state.activeMessage = action.payload;
    }
  },
});

export const { messagesList, setActiveMessage,activeMessage} = messageSlice.actions;

export default messageSlice.reducer;
