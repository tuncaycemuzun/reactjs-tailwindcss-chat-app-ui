import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showHidebar: false
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setShowHideBar: (state, action) => {
      state.showHidebar = action.payload;
    }
  },
});

export const { setShowHideBar} = settingsSlice.actions;

export default settingsSlice.reducer;
