import { configureStore } from "@reduxjs/toolkit";
import Theme from "./Slices/themeSlice";
const createStore = configureStore({
    reducer:{
        Theme,
    },
})

export default createStore;