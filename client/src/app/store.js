import { configureStore } from "@reduxjs/toolkit";
import buttonReducer from "./features/slice/buttonSlice";

export default configureStore({
    reducer: {
        button: buttonReducer,
    },
})