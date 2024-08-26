import { createSlice } from "@reduxjs/toolkit";


const appSlice = createSlice({
    name: "app",
    initialState: {
        sidebarOpen: false,
        selectedTab: 'Projects',
    },
    reducers: {
        toggleSidebar: (state) => {
            state.sidebarOpen = !state.sidebarOpen;
        },
        setSelectedTab: (state, action) => {
            state.selectedTab = action.payload;
          },
    },
});

export const { toggleSidebar,setSelectedTab } = appSlice.actions;
export default appSlice.reducer;