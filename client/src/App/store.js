import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Features/auth/authSlice";
import postsReducer from "../Features/posts/postsSlice";


export const store = configureStore({
    reducer: {
        auth: authReducer,
        posts: postsReducer,
    },
})